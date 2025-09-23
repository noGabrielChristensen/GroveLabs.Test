// Sacred admin password
const ADMIN_PASSWORD = "GroveFire"; // change to your secret

document.getElementById("adminBtn").addEventListener("click", () => {
    let pass = prompt("Enter Admin Password:");
    if(pass === ADMIN_PASSWORD) {
        localStorage.setItem("userRole", "admin");
        window.location.href = "home.html";
    } else {
        alert("Incorrect password");
    }
});

document.getElementById("guestBtn").addEventListener("click", () => {
    localStorage.setItem("userRole", "guest");
    window.location.href = "home.html";
});
