const inputs = document.querySelectorAll("#chooseInput");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 3) {
      input.value = input.value.slice(0, 3);
    }
  });
});
