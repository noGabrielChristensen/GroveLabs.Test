document.addEventListener("DOMContentLoaded", () => {
  const adminBtn = document.getElementById("adminBtn");
  const guestBtn = document.getElementById("guestBtn");
  const adminPanel = document.getElementById("adminPanel");
  const guestPanel = document.getElementById("guestPanel");
  const closeBtns = document.querySelectorAll(".close-btn");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const adminWallBtn = document.getElementById("adminWallBtn");
  const adminError = document.getElementById("adminError");

  // Admin button open modal
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      adminPanel.style.display = "block";
    });
  }

  // Guest button open modal
  if (guestBtn) {
    guestBtn.addEventListener("click", () => {
      guestPanel.style.display = "block";
    });
  }

  // Close modals
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  // Close if clicked outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });

  // Admin Login validation
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("adminUser").value.trim();
      const pass = document.getElementById("adminPass").value.trim();

      if (user === "admin" && pass === "ES@261001117") {
        adminPanel.style.display = "none";
        adminWallBtn.classList.remove("hidden");
        alert("Welcome, Admin. The Wall has been unlocked.");
      } else {
        adminError.textContent = "Incorrect username or password.";
        setTimeout(() => {
          location.reload(); // refresh to hide button
        }, 1200);
      }
    });
  }
});
