import { plForm } from "./tenants/pl.js";
import { lvForm } from "./tenants/lv.js";
import { ltForm } from "./tenants/lt.js";
import { eeForm } from "./tenants/ee.js";
import { huForm } from "./tenants/hu.js";
import { czForm } from "./tenants/cz.js";
import { skForm } from "./tenants/sk.js";
import { switchStates } from "./js/switch.js";

const buttonFunctionMap = {
  "btn-pl": plForm,
  "btn-lv": lvForm,
  "btn-lt": ltForm,
  "btn-ee": eeForm,
  "btn-hu": huForm,
  "btn-cz": czForm,
  "btn-sk": skForm,
};

function executeInCurrentTab(func, args = []) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: func,
        args: args,
      });
    }
  });
}

Object.keys(buttonFunctionMap).forEach((buttonId) => {
  const button = document.querySelector(`.${buttonId}`);
  if (button) {
    button.addEventListener("click", () => {
      executeInCurrentTab(buttonFunctionMap[buttonId]);
      if (switchStates["step1Switch"]) {
        setTimeout(() => {
          executeInCurrentTab(buttonFunctionMap[buttonId]);
        }, 500);
      }
      if (switchStates["step2Switch"]) {
        let count = 0; // Initialize a count variable to keep track of the number of times the function has run

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const initialUrl = tabs[0].url; // Store the initial URL

          const intervalId = setInterval(() => {
            executeInCurrentTab(buttonFunctionMap[buttonId]); // Execute the function

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
              const currentUrl = tabs[0].url;
              if (currentUrl !== initialUrl) {
                clearInterval(intervalId); // Stop the interval if the URL changes
                return;
              }

              count++; // Increment the count after each execution

              if (count >= 15) {
                // Check if the count has reached the maximum limit
                clearInterval(intervalId); // Stop the interval after running 10 times
              }
            });
          }, 1000);
        });
      }
    });
  }
});
