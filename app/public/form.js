const form = document.querySelector(".block-search");

form.addEventListener("click", (form) => {
  form.preventDefault();
});

function hideLabel() {
  const form = document.hasFocus(".footer-search");

  const label = document.querySelector("#footerLabel");

  if (form) {
    label.style.display = "none";
  } else {
    label.style.display = "block";
  }
}
