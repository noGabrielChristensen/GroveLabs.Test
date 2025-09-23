document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const guestButton = document.getElementById("guestButton");
  const adminButton = document.getElementById("adminButton");
  const adminsWall = document.getElementById("adminsWall");
  const logoutButton = document.getElementById("logoutButton");

  const profileUsername = document.getElementById("profileUsername");
  const bioInput = document.getElementById("bioInput");
  const saveBio = document.getElementById("saveBio");
  const bioDisplay = document.getElementById("bioDisplay");

  // Registration
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;

      if (localStorage.getItem(username)) {
        alert("Username already exists!");
      } else {
        localStorage.setItem(username, JSON.stringify({ password, bio: "" }));
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

      const userData = localStorage.getItem(username);
      if (userData) {
        const parsed = JSON.parse(userData);
        if (parsed.password === password) {
          localStorage.setItem("currentUser", username);
          localStorage.setItem("isAdmin", "false");
          window.location.href = "newsfeed.html";
        } else {
          alert("Invalid password.");
        }
      } else {
        alert("User not found.");
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

  // Profile page
  if (profileUsername) {
    const currentUser = localStorage.getItem("currentUser");
    profileUsername.textContent = `Logged in as: ${currentUser}`;

    if (currentUser && currentUser !== "Guest" && currentUser !== "Admin") {
      const userData = JSON.parse(localStorage.getItem(currentUser));
      if (userData.bio) {
        bioDisplay.textContent = userData.bio;
      }

      saveBio.addEventListener("click", () => {
        const newBio = bioInput.value;
        userData.bio = newBio;
        localStorage.setItem(currentUser, JSON.stringify(userData));
        bioDisplay.textContent = newBio;
        bioInput.value = "";
      });
    } else {
      bioInput.style.display = "none";
      saveBio.style.display = "none";
      bioDisplay.textContent = "Guests/Admins do not have bios.";
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
