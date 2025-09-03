const todoGreet = document.querySelector(".todo-greet h2");
const todoDate = document.querySelector(".todo-date p");
const todoTime = document.querySelector(".time");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".textbox");
const todoList = document.querySelector(".todo-content");

// Greeting function
const greeting = () => {
  let name = "Gavindu";

  let greet = null;

  time = new Date().getHours();
  if (time < 12) {
    greet = `Good morning,`;
  } else if (time < 18) {
    greet = `Good afternoon,`;
  } else {
    greet = "Good evening";
  }

  textContent = greet + " " + name;
  return textContent;
};
// Set greeting
todoGreet.textContent = greeting();

// Calander function
const calander = () => {
  const date = new Date();
  const dayString = date.toLocaleDateString("en-US", { weekday: "short" });
  const monthString = date.toLocaleDateString("en-US", { month: "long" });
  let dateSuffix = null;

  let dateNum = date.getDate();
  switch (dateNum % 10) {
    case 1:
      dateSuffix = "st";
      break;
    case 2:
      dateSuffix = "nd";
      break;
    case 3:
      dateSuffix = "rd";
      break;
    default:
      dateSuffix = "th";
      break;
  }

  textContent =
    "Today," +
    " " +
    dayString +
    " " +
    date.getDate() +
    dateSuffix +
    " " +
    monthString +
    " " +
    date.getFullYear();
  return textContent;
};
// Set Calander
todoDate.textContent = calander();

// Time function
const timeNow = () => {
  let date = new Date();
  let formattedTime = date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  textContent = formattedTime;
  return textContent;
};
// Set Time
todoTime.textContent = timeNow();

let todos = [];

const addTodo = (text) => {
  const newTodo = {
    id: todos.length + 1,
    text: text,
    completed: false,
  };
  todos.push(newTodo);
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value;
  addTodo(text);
  todoInput.value = "";
  renderTodos();
});

const renderTodos = () => {
  todoList.innerHTML = "";
  const todoElements = todos.map((todo) => {
    return `<div class="todo-list">
              <input type="checkbox" class= "todo-check" id="todo-${
                todo.id
              }" data-id="${todo.id}" ${todo.completed ? "checked" : ""}/>
              <span>${todo.text}</span>
                <button class="delete-button" data-id="${
                  todo.id
                }">Delete</button>
            </div>`;
  });

  todoList.innerHTML = todoElements.join("");

  todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
      e.preventDefault();
      const deleteID = parseInt(e.target.getAttribute("data-id"));
      deleteTodo(deleteID);
    }
  });
};

//delete todo
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
};


