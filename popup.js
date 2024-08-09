import { plForm } from "./tenants/pl.js";
import { lvForm } from "./tenants/lv.js";
import { ltForm } from "./tenants/lt.js";
import { eeForm } from "./tenants/ee.js";
import { huForm } from "./tenants/hu.js";
import { czForm } from "./tenants/cz.js";
import { skForm } from "./tenants/sk.js";
import { switchStates } from "./js/switch.js";
import { selectRandomPaymentMethod } from "./js/choosePayment.js";
import { skipFirstStep } from "./js/skipFirstStep.js";
import { nextStep } from "./js/nextStep.js";
import { enForm } from "./tenants/en.js";
import { formsData } from "./js/formEditor.js";

const buttonFunctionMap = {
  "btn-pl": plForm,
  "btn-lv": lvForm,
  "btn-lt": ltForm,
  "btn-ee": eeForm,
  "btn-hu": huForm,
  "btn-cz": czForm,
  "btn-sk": skForm,
  "btn-en": enForm,
};

function executeInCurrentTab(func, args = []) {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: func,
            args: args,
          },
          (results) => {
            if (results && results[0] && results[0].result instanceof Promise) {
              results[0].result.then(resolve);
            } else {
              resolve(results);
            }
          }
        );
      } else {
        resolve();
      }
    });
  });
}

function getCurrentTabUrl() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        resolve(tabs[0].url);
      } else {
        resolve(null);
      }
    });
  });
}

function waitForUrlChange(...expectedUrls) {
  return new Promise((resolve) => {
    const checkUrl = async () => {
      const currentUrl = await getCurrentTabUrl();
      if (expectedUrls.some((url) => currentUrl.includes(url))) {
        resolve(currentUrl);
      } else {
        setTimeout(checkUrl, 500); // Check every 500ms
      }
    };
    checkUrl();
  });
}

async function executeAndWaitForUrlChange(func, params, expectedUrl) {
  console.log(
    `Executing function and waiting for URL to include: ${expectedUrl}`
  );
  await executeInCurrentTab(func, params ? [params] : []);
  const newUrl = await waitForUrlChange(expectedUrl);
  console.log("URL changed to:", newUrl);
  return newUrl;
}

async function handleButtonClick(buttonId, formData) {
  console.log("Button clicked:", buttonId);
  let initialUrl = await getCurrentTabUrl();
  console.log("Initial URL:", initialUrl);

  // Ensure we have the latest form data

  // Initial form filling
  await executeInCurrentTab(buttonFunctionMap[buttonId], [formData]);

  // Wait for a short time to allow for potential URL change
  await new Promise((resolve) => setTimeout(resolve, 500));

  let currentUrl = await getCurrentTabUrl();
  console.log("Current URL after initial action:", currentUrl);

  // If URL hasn't changed, trigger another click
  if (currentUrl === initialUrl) {
    console.log("URL didn't change, triggering another click");
    await executeInCurrentTab(buttonFunctionMap[buttonId], [formData]);
    currentUrl = await getCurrentTabUrl();
    console.log("Current URL after second click:", currentUrl);
  }

  // Check if we've gone directly to payment
  if (currentUrl.includes("/booking/payment")) {
    console.log("Directly at payment page, skipping services step");
  }
  // Go to services if needed and if the page exists
  else if (
    switchStates["goToServicesSwitch"] &&
    !currentUrl.includes("/booking/services")
  ) {
    console.log("Attempting to go to services page");
    await executeInCurrentTab(skipFirstStep);
    currentUrl = await waitForUrlChange(
      "/booking/services",
      "/booking/payment"
    );
    console.log("URL after attempting to go to services:", currentUrl);
  }

  // If we're not at payment page yet
  if (
    !currentUrl.includes("/booking/payment") &&
    switchStates["goToPaymentSwitch"]
  ) {
    console.log("Going to payment page");
    currentUrl = await executeAndWaitForUrlChange(
      nextStep,
      null,
      "/booking/payment"
    );
    console.log("URL after going to payment:", currentUrl);
  }

  // Go to summary
  if (
    switchStates["gotoSummarySwitch"] &&
    currentUrl.includes("/booking/payment")
  ) {
    console.log("At payment page, selecting random payment method");
    await executeInCurrentTab(selectRandomPaymentMethod);
    console.log("Random payment method selected, moving to summary");
    currentUrl = await executeAndWaitForUrlChange(
      nextStep,
      null,
      "/booking/summary"
    );
    console.log("URL after going to summary:", currentUrl);
  }

  console.log("Process completed. Final URL:", currentUrl);
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Ensure formsData is up-to-date when the DOM loads

  // Map of button IDs to language codes
  const buttonLangMap = {
    "btn-pl": "pl",
    "btn-lv": "lv",
    "btn-lt": "lt",
    "btn-ee": "ee",
    "btn-hu": "hu",
    "btn-cz": "cz",
    "btn-sk": "sk",
    "btn-en": "en",
  };

  Object.keys(buttonFunctionMap).forEach((buttonId) => {
    const button = document.querySelector(`.${buttonId}`);
    if (button) {
      button.addEventListener("click", () => {
        const lang = buttonLangMap[buttonId];
        // Get the latest form data
        const formData = JSON.parse(JSON.stringify(formsData[lang]));
        handleButtonClick(buttonId, formData);
      });
    }
  });
});
