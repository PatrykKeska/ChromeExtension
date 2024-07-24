export function nextStep() {
  const button = document.querySelector(
    'button[data-testid="wizard-sidebar-next-button"]'
  );

  if (button) {
    button.click();
  }
}
