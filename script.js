const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".content-container,.footer,.navbar,.navbar-container"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
