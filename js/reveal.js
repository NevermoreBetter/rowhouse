function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  let revealli = document.querySelectorAll(".revealli");

  for (let i = 0; i < reveals.length; i++) {
    let height = window.innerHeight;
    let top = reveals[i].getBoundingClientRect().top;
    const visible = 5;

    if (top < height - visible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  for (let j = 0; j < revealli.length; j++) {
    let heightH = window.innerHeight;
    let topH = revealli[j].getBoundingClientRect().top;
    const visibleH = 45;

    if (topH < heightH - visibleH) {
      revealli[j].classList.add("active");
    } else {
      revealli[j].classList.remove("active");
    }
  }
}

reveal();
window.addEventListener("scroll", reveal);
