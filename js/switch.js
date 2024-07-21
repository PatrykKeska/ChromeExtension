const switchIds = ["step1Switch", "step2Switch"];
export let switchStates = {};

// Initialize switch states from localStorage
switchIds.forEach((switchId) => {
  const input = document.getElementById(switchId);
  switchStates[switchId] = localStorage.getItem(switchId) === "true";
  if (input) {
    input.checked = switchStates[switchId];

    input.addEventListener("change", function () {
      switchStates[switchId] = this.checked;
      localStorage.setItem(switchId, switchStates[switchId]);
      updateSwitchState(switchId);
    });
  }
});

export function updateSwitchState(switchId) {
  if (switchStates[switchId]) {
  }
}
