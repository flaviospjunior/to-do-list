import { addTask } from "./script";
//import * as taskManager from "./script";
//import teste from "./script";

document.addEventListener("keydown", function (tecla) {
  if (
    document.activeElement == document.querySelector(".adicionar") &&
    tecla.key == "Tab"
  ) {
    console.log(tecla.key);
    addTask();
  }
});

const addButtons = document.querySelectorAll("adicionar");
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addTask();
  });
});
