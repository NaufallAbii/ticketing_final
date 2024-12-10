// JavaScript for Tab Switching
document
.getElementById("active-tickets-tab")
.addEventListener("click", function () {
  document.getElementById("active-tickets").style.display = "block";
  document.getElementById("ticket-history").style.display = "none";
  document
    .getElementById("active-tickets-tab")
    .classList.add("active-tab");
  document.getElementById("history-tab").classList.remove("active-tab");
});

document
.getElementById("history-tab")
.addEventListener("click", function () {
  document.getElementById("active-tickets").style.display = "none";
  document.getElementById("ticket-history").style.display = "block";
  document.getElementById("history-tab").classList.add("active-tab");
  document
    .getElementById("active-tickets-tab")
    .classList.remove("active-tab");
});