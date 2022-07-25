let emails = [];
function addEmail(event) {
  event.preventDefault();
  let email = {
    adress: document.getElementById("send").value,
  };
  emails.push(email);
  document.querySelector("form").reset();
  console.warn("added", emails);
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".connect__btn").addEventListener("click", addEmail);
});
