var users = [];
function addUser(e) {
  e.preventDefault();
  var user = {
    id: Date.now(),
    firstName: document.getElementById("FName").value,
    lastName: document.getElementById("LName").value,
    email: document.getElementById("Email").value,
    number: document.getElementById("Number").value,
    location: document.getElementById("location").value,
  };
  users.push(user);
  document.querySelector("form").reset();

  console.warn("added", users);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".form__btn").addEventListener("click", addUser);
});
