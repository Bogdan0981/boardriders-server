const button = document.getElementById("hideFilter");
const container = document.getElementById("filtres");

button.addEventListener("click", () => {
  if (container.style.display === "none") {
    container.style.display = "inline-block";
    button.classList.remove("products-buttons-button__active");
  } else {
    container.style.display = "none";
    button.classList.add("products-buttons-button__active");
  }
});
