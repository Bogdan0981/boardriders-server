const slider = document.getElementById("inputRange");

slider.addEventListener("input", function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #e57373 ${value}%, #ddd ${value}%)`;
});
