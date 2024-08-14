export let switchStates = {};

document.addEventListener("DOMContentLoaded", function () {
  const switchIds = [
    "goToServicesSwitch",
    "goToPaymentSwitch",
    "gotoSummarySwitch",
    "suggestedSwitch",
  ];

  // Initialize switchStates from localStorage
  switchIds.forEach((switchId) => {
    const input = document.getElementById(switchId);
    if (input) {
      const storedState = localStorage.getItem(switchId);
      switchStates[switchId] = storedState === "true";
      input.checked = switchStates[switchId];

      input.addEventListener("change", function () {
        updateSwitchStates(switchId, this.checked);
        updateButtonVisibility();
      });
    }
  });

  // Initial button visibility update
  updateButtonVisibility();

  // Detect language and highlight button
  detectAndHighlight();
});

function updateSwitchStates(switchId, checked) {
  switch (switchId) {
    case "gotoSummarySwitch":
      switchStates["goToServicesSwitch"] = true;
      switchStates["goToPaymentSwitch"] = true;
      switchStates["gotoSummarySwitch"] = checked;
      break;
    case "goToPaymentSwitch":
      switchStates["goToServicesSwitch"] = true;
      switchStates["goToPaymentSwitch"] = checked;
      switchStates["gotoSummarySwitch"] = false;
      break;
    case "goToServicesSwitch":
      switchStates["goToServicesSwitch"] = checked;
      switchStates["goToPaymentSwitch"] = false;
      switchStates["gotoSummarySwitch"] = false;
      break;
    default:
      switchStates[switchId] = checked;
  }

  // Update localStorage and checkbox states
  for (const id in switchStates) {
    localStorage.setItem(id, switchStates[id]);
    const input = document.getElementById(id);
    if (input) {
      input.checked = switchStates[id];
    }
  }
}

function detectAndHighlight(retries = 3) {
  detectLanguage((lang) => {
    if (lang) {
      localStorage.setItem("detectedLang", lang);
      highlightButton(lang);
    } else if (retries > 0) {
      setTimeout(() => detectAndHighlight(retries - 1), 1000);
    } else {
      console.error("Failed to detect language");
    }
  });
}

export function detectLanguage(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: () => document.documentElement.lang.toLowerCase(),
      },
      (injectionResults) => {
        const lang = injectionResults[0].result;
        callback(lang);
      }
    );
  });
}

export function highlightButton(lang) {
  const langMap = {
    pl: "pl",
    lv: "lv",
    lt: "lt",
    et: "ee",
    hu: "hu",
    cs: "cz",
    sk: "sk",
    en: "en",
  };

  const btnId = langMap[lang] || lang;
  const button = document.getElementById(btnId);

  if (button) {
    document
      .querySelectorAll(".suggested")
      .forEach((btn) => btn.classList.remove("suggested"));
    button.classList.add("suggested");
    console.log(`Added 'suggested' class to button with id: ${btnId}`);
    updateButtonVisibility();
  } else {
    console.log(`No button found for language: ${lang}`);
  }
}

function updateButtonVisibility() {
  if (switchStates["suggestedSwitch"]) {
    document.querySelectorAll(".btn").forEach((btn) => {
      if (btn.classList.contains("suggested")) {
        btn.classList.remove("hidden");
      } else {
        btn.classList.add("hidden");
      }
    });
  } else {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("hidden");
    });
  }
}

// Listen for changes to the switch state
window.addEventListener("storage", () => {
  updateButtonVisibility();
});
