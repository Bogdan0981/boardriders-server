module.exports = {
  proxy: "localhost:3000", // Замените на ваш порт, если другой
  files: ["public/**/*.{html,css,js}"],
  port: 3002, // Порт для browser-sync
  open: false,
  notify: false,
};
