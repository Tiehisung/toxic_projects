const formEl = document.getElementById("registration-form");
const listEl = document.getElementById("list");

const members = [];

function register(event) {
  event.preventDefault();

  const inputEl = document.querySelector("#fullname");
  members.push(inputEl.value);
  listEl.innerHTML += `<li>${inputEl.value}</li>`;

  //   const li = document.createElement("li");
  //   li.textContent = inputEl.value;
  //   listEl.appendChild(li);

  formEl.reset();
}

formEl.addEventListener("submit", register);
