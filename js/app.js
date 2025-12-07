const cucumberImage = document.getElementById("cucumberImage");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", () => {
  cucumberImage.classList.remove("hidden");
});

button2.addEventListener("click", () => {
  window.close();
});
