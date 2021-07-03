document.addEventListener("keydown", function (tecla) {
  if (
    document.activeElement == document.querySelector("#adicionar") &&
    tecla.key == "Tab"
  ) {
    import { addTask } from "./script.js";
    addTask();
  }
});
