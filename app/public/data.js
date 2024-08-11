document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    fetch("/data/categories.json").then((response) => response.json()),
    fetch("/data/brand.json").then((response) => response.json()),
    fetch("/data/size.json").then((response) => response.json()),
    fetch("/data/technology.json").then((response) => response.json()),
    fetch("/data/color.json").then((response) => response.json()),
  ])
    .then(([categoriesData, brandsData, sizeData, techData, colorData]) => {
      // Обработка categories.json
      const categoryContainer = document.querySelector(
        ".products-filtres-category"
      );
      if (categoryContainer) {
        categoriesData.forEach((category) => {
          const categoryElement = document.createElement("div");
          categoryElement.classList.add("products-filtres-filter");

          categoryElement.innerHTML = `
                      <div class="products-filtres-filter-input">
                          <input type="checkbox" id="productsSnowbords}" class="products-filtres-input" />
                          <label for="productsSnowbords">${category.productCategoryName}</label>
                      </div>
                      <p class="products-filtres-count">${category.productCategoryCount}</p>
                  `;

          categoryContainer.appendChild(categoryElement);
        });
      }

      // Обработка brand.json (пример)
      const brandContainer = document.querySelector(".products-filtres-brand");
      if (brandContainer) {
        brandsData.forEach((brand) => {
          const brandElement = document.createElement("div");
          brandElement.classList.add("products-filtres-filter");

          brandElement.innerHTML = `
                      <div class="products-filtres-filter-input">
                          <input type="checkbox" id="productsSnowbords" class="products-filtres-input" />
                          <label for="productsSnowbords">${brand.productBrandName}</label>
                      </div>
                      <p class="products-filtres-count">${brand.productBrandCount}</p>
                  `;

          brandContainer.appendChild(brandElement);
        });
      }

      const sizeContainer = document.querySelector(".products-filtres-size");
      if (sizeContainer) {
        sizeData.forEach((size) => {
          const sizeElement = document.createElement("div");
          sizeElement.classList.add("products-filtres-filter");

          sizeElement.innerHTML = ` <div class="products-filtres-filter-input">
                          <input type="checkbox" id="productsSnowbords" class="products-filtres-input" />
                          <label for="productsSnowbords">${size.productSizeName}</label>
                      </div>
                      <p class="products-filtres-count">${size.productSizeCount}</p>`;
          sizeContainer.appendChild(sizeElement);
        });
      }

      const techContainer = document.querySelector(
        ".products-filtres-technology"
      );

      if (techContainer) {
        techData.forEach((tech) => {
          const techElement = document.createElement("div");
          techElement.classList.add("products-filtres-filter");

          techElement.innerHTML = `<div class="products-filtres-filter-input">
                          <input type="checkbox" id="productsSnowbords" class="products-filtres-input" />
                          <label for="productsSnowbords">${tech.productTechnologyName}</label>
                      </div>
                      <p class="products-filtres-count">${tech.productTechnologyCount}</p>`;
          techContainer.appendChild(techElement);
        });
      }

      const colorContainer = document.querySelector(".products-filtres-color");

      if (colorContainer) {
        colorData.forEach((color) => {
          const colorElement = document.createElement("div");
          colorElement.classList.add("products-filtres-filter");

          colorElement.innerHTML = `<div class="products-filtres-filter-input">
                          <input type="checkbox" id="productsSnowbords" class="products-filtres-input" />
                          <label for="productsSnowbords"><div class="products-filtres-filter-input-color" id="filterColor"></div>${color.productColorName}</label>
                      </div>
                      <p class="products-filtres-count">${color.productColorCount}</p>`;
          colorContainer.appendChild(colorElement);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
