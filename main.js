var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
  window.scrollTo(0,0);
});

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
}
