document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const adminBtn = document.getElementById("adminBtn");
  const guestBtn = document.getElementById("guestBtn");
  const adminPanel = document.getElementById("adminPanel");
  const guestPanel = document.getElementById("guestPanel");
  const closeBtns = document.querySelectorAll(".close-btn");

  // Open Admin Panel
  if (adminBtn && adminPanel) {
    adminBtn.addEventListener("click", () => {
      adminPanel.style.display = "block";
    });
  }

  // Open Guest Panel
  if (guestBtn && guestPanel) {
    guestBtn.addEventListener("click", () => {
      guestPanel.style.display = "block";
    });
  }

  // Close Panels
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  // Close if clicked outside panel
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
