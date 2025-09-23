// Handle registration (demo only, no backend yet)
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const adminButton = document.getElementById("adminButton");
  const adminsWall = document.getElementById("adminsWall");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Registration complete. (Demo only)");
      window.location.href = "newsfeed.html";
    });
  }

  // Hidden Admin login
  if (adminButton) {
    adminButton.addEventListener("click", () => {
      const password = prompt("Enter Admin Password:");
      if (password === "ES@261001117") {
        alert("Access Granted.");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "newsfeed.html";
      } else {
        alert("Incorrect Password.");
        localStorage.removeItem("isAdmin");
        window.location.reload(); // refreshes page
      }
    });
  }

  // Show Admin’s Wall only if logged in as Admin
  if (adminsWall) {
    if (localStorage.getItem("isAdmin") === "true") {
      adminsWall.classList.remove("admin-hidden");
    }
  }
});
