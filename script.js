$(document).ready(function(){
  document.getElementById("#comment").click(function(){
var input = $('#input').val(" ");
document.getElementById(".box").append(input+ "<br>");
document.getElementById("#input").val(" ");
document.getElementById(".box-container").slidedown();
});

document.getElementById("#cancel").click(function(){
document.getElementById("#input").val(" ");
});

document.getElementById("#delete").click(function(){

document.getElementById("#box").text(" ");
document.getElementById(".box-container").slideup();
});
});

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

