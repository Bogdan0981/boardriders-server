window.onload = function () {
  const container = document.querySelector(".hero-items");
  const items = document.querySelectorAll(".hero-item");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  let isDown = false;
  let startX;
  let scrollLeft;

  if (items.length >= 2) {
    centerItem(1); // Центрируем второй элемент при загрузке
  }

  leftButton.addEventListener("click", function () {
    scrollItems("left");
  });

  rightButton.addEventListener("click", function () {
    scrollItems("right");
  });

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // прокрутка в два раза быстрее
    container.scrollLeft = scrollLeft - walk;
  });

  function centerItem(index) {
    const containerWidth = container.clientWidth;
    const itemCenter = items[index].offsetLeft + items[index].clientWidth / 2;
    container.scrollLeft = itemCenter - containerWidth / 2;
  }

  function scrollItems(direction) {
    const scrollAmount =
      items[0].clientWidth +
      parseFloat(getComputedStyle(items[0]).marginRight) * 2;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
};
