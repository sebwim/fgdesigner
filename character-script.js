const form = document.getElementById("customization-form");
const character = document.getElementById("default-character");

// Event listener for form change
form.addEventListener("change", function(event) {
  const top = form.elements["top-select"].value;
  const bottom = form.elements["bottom-select"].value;
  const faceplate = form.elements["faceplate-select"].value;
  const color = form.elements["color-select"].value;
  const pattern = form.elements["pattern-select"].value;

  // Update default character
  character.style.backgroundImage = `url('./character-${top}-${bottom}-${faceplate}-${color}-${pattern}.png')`;
});
