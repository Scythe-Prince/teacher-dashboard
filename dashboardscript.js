const sideBar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const tabs = document.querySelectorAll(".tab");
const modeSwitch = document.querySelector(".toggle-switch");
const body = document.querySelector("body");
const logoutBtn = document.getElementById("logout");
///////////////////////////////////////////
const content = document.getElementsByClassName("content");
const dashboard = document.getElementById("dashboard");
const diploma = document.getElementById("diploma");
const master = document.getElementById("master");
const doctorate = document.getElementById("doctorate");
const doctorateBtn = document.getElementById("doctorateBtn");
const dashboardBtn = document.getElementById("dashboardBtn");
const diplomaBtn = document.getElementById("diplomaBtn");
const masterBtn = document.getElementById("masterBtn");
///////////////////////////////////////////
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  content.classList.toggle("dark");
  dashboard.classList.toggle("dark");
  diploma.classList.toggle("dark");
  doctorate.classList.toggle("dark");
  master.classList.toggle("dark");
});
///////////////////////////////////////////
toggle.addEventListener("click", () => {
  sideBar.classList.toggle("narrow");
});
///////////////////////////////////////////

// dashboardBtn.addEventListener("click", () => {
//   master.style.display = "none";
//   diploma.style.display = "none";
//   doctorate.style.display = "none";
//   dashboard.style.display = "block";
// });
// masterBtn.addEventListener("click", () => {
//   dashboard.style.display = "none";
//   diploma.style.display = "none";
//   doctorate.style.display = "none";
//   master.style.display = "block";
// });
// diplomadBtn.addEventListener("click", () => {
//   dashboard.style.display = "none";
//   master.style.display = "none";
//   doctorate.style.display = "none";
//   diploma.style.display = "block";
// });
// doctorateBtn.addEventListener("click", () => {
//   dashboard.style.display = "none";
//   master.style.display = "none";
//   diploma.style.display = "none";
//   doctorate.style.display = "block";
// });

///////////////////////////////////////////
// changing width after width=1000
// window.addEventListener("resize", function () {
//   var w = window.innerWidth;
//   {
//     if (w < 1000) {
//       sideBar.classList.add("narrow");
//     } else {
//       sideBar.classList.remove("narrow");
//     }
//   }
// });
