let lastUrl = location.href;

function checkUrlChange() {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    // Remove the skipFirstStep call from here
  }
  setTimeout(checkUrlChange, 100);
}

export function skipFirstStep() {
  let btn = document.querySelector(
    'button[data-testid="wizard-sidebar-next-button"]'
  );
  if (btn) {
    btn.click();
    setTimeout(() => {
      btn.click();
    }, 1000);
  }
}

checkUrlChange();

// Now skipFirstStep can be called from elsewhere as needed
