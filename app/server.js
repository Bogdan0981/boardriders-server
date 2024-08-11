/* const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("data"));

// Route to fetch data from multiple JSON files
app.get("/catalogeLvl1.html/data", (req, res) => {
  try {
    // Read multiple JSON files
    const categories = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "categories.json"))
    );
    const brand = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "brand.json"))
    );

    // Combine the data into one object/array
    const combinedData = {
      categories,
      brand,
    };

    // Send combined data as response
    res.json(combinedData);
  } catch (error) {
    console.error("Error reading JSON files:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// Обслуживаем статические файлы из папки public
app.use(express.static("public"));

// Маршрут для обработки запросов к JSON-файлам
app.get("/data/:file", (req, res) => {
  const filePath = path.join(__dirname, "data", req.params.file);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
