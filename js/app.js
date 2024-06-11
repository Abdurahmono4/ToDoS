const todoTemplate = document.querySelector("#todoTemplate");
const tasks = document.querySelector("#tasks");
export function renderTodosUI(todos) {
  todos.forEach(({ id, isCompleted, inputValue: title }) => {
    const cloneTemplate = todoTemplate.content.cloneNode(true);
    cloneTemplate.querySelector("#todoTitle").innerText = title;
    // cloneTemplate.querySelector("#todoStatus").checked = isCompleted;
    tasks.appendChild(cloneTemplate);
  });
  todos.map((item) => {
    const removeButton = document.querySelector("#todoRemoveButton");
    const list = document.querySelector(".list");
    removeButton.addEventListener("click", () => {
      list.classList.add("hidden");
      console.log(list);
    });
  });
}
