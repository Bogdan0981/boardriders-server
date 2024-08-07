const buttons = document.querySelectorAll(".new-card-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("new-card-button__active");
  });
});
