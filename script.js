const input = document.querySelector(".input");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", save);

function save() {
  localStorage.setItem("to-do", input.value);
}
