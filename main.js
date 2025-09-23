document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const guestButton = document.getElementById("guestButton");
  const adminButton = document.getElementById("adminButton");
  const adminsWall = document.getElementById("adminsWall");
  const logoutButton = document.getElementById("logoutButton");

  // Registration
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;

      if (localStorage.getItem(username)) {
        alert("Username already exists!");
      } else {
        localStorage.setItem(username, password);
        alert("Registration complete.");
      }
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      const storedPassword = localStorage.getItem(username);

      if (storedPassword && storedPassword === password) {
        localStorage.setItem("currentUser", username);
        localStorage.setItem("isAdmin", "false");
        window.location.href = "newsfeed.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  }

  // Guest login
  if (guestButton) {
    guestButton.addEventListener("click", () => {
      localStorage.setItem("currentUser", "Guest");
      localStorage.setItem("isAdmin", "false");
      window.location.href = "newsfeed.html";
    });
  }

  // Admin login
  if (adminButton) {
    adminButton.addEventListener("click", () => {
      const password = prompt("Enter Admin Password:");
      if (password === "ES@261001117") {
        alert("Access Granted.");
        localStorage.setItem("currentUser", "Admin");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "newsfeed.html";
      } else {
        alert("Incorrect Password.");
        localStorage.removeItem("isAdmin");
        window.location.reload();
      }
    });
  }

  // Admin Wall visibility
  if (adminsWall) {
    if (localStorage.getItem("isAdmin") === "true") {
      adminsWall.classList.remove("admin-hidden");
    }
  }

  // Logout
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isAdmin");
      window.location.href = "index.html";
    });
  }
});
