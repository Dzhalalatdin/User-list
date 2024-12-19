const list = document.getElementById("list");
const filter = document.getElementById("filter");
let USERS = [];

async function start() {
  list.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 2000);
  } catch (error) {
    list.style.color = "red";
    list.innerHTML = error.message;
  }
}

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(value);
  const filteredUsers = USERS.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  render(filteredUsers);
  // USERS = filteredUsers;
  console.log(filteredUsers);
});

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No users found";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `
    <li class="list-group item">
      <h2>${user.name}</h2>
      
    </li>
  `;
}

start();
