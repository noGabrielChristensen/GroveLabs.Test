document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const adminButton = document.getElementById("adminButton");
  const guestButton = document.getElementById("guestButton");
  const adminsWallButtons = document.querySelectorAll("#adminsWall");

  // Registration (demo only)
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration complete. (Demo only)");
      window.location.href = "news.html";
    });
  }

  // Guest button access
  if (guestButton) {
    guestButton.addEventListener("click", () => {
      localStorage.removeItem("isAdmin");
      window.location.href = "news.html";
    });
  }

  // Admin login
  if (adminButton) {
    adminButton.addEventListener("click", () => {
      const password = prompt("Enter Admin Password:");
      if (password === "ES@261001117") {
        alert("Access Granted.");
        localStorage.setItem("isAdmin", "true");
        // Show Admin’s Wall only for admin
        adminsWallButtons.forEach(btn => btn.classList.remove("admin-hidden"));
        window.location.href = "news.html";
      } else {
        alert("Incorrect Password.");
        localStorage.removeItem("isAdmin");
        window.location.reload();
      }
    });
  }

  // Show Admin’s Wall if logged in as Admin
  if (localStorage.getItem("isAdmin") === "true") {
    adminsWallButtons.forEach(btn => btn.classList.remove("admin-hidden"));
  }
});
