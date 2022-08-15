import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io("http://localhost:5000");

const $title = document.getElementById("title");
const $des = document.getElementById("description");
const $input = document.getElementById("input");

socket.on("connect", () => {
  console.log(socket); // true
});

// socket.emit("message", body);
const sendMessage = (msg) => {
  socket.emit("message", msg);
};

$input.addEventListener("keyup", (e) => {
  // console.log($input.value)
  sendMessage($input.value);
});

addEventListener("DOMContentLoaded", () => {
  socket.on("message", (msg) => {
    $title.textContent = msg
  });
});
