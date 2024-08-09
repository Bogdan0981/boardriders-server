const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const db = require("./db");

// Укажите статическую папку
app.use(express.static(path.join(__dirname, "public")));

// Маршрут для главной страницы
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Пример маршрута для получения данных из базы данных
app.get("/catalogeLvl1.html/api/data", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM productCategory, productBrand, productSize, productTechnology, productColor"
    ); // замените your_table на ваше имя таблицы
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
