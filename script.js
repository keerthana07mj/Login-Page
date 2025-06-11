const users = [
  {
    email: "user@example.com",
    password: "1234",
    phone: "9876543210",
    otp: "1111",
    username: "user1"
  }
];
let currentMode = "email";
function setMode(mode) {
  currentMode = mode;

  document.querySelectorAll(".auth-form").forEach(div => div.classList.add("hidden"));

  if (mode === "email") document.getElementById("email-login").classList.remove("hidden");
  if (mode === "phone") document.getElementById("phone-login").classList.remove("hidden");
  if (mode === "username") document.getElementById("username-login").classList.remove("hidden");

  document.getElementById("message").innerText = "";
}
document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("message");
  let success = false;

  const user = users[0]; 

  if (currentMode === "email") {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("email-password").value;
    success = (email === user.email && pass === user.password);
  } else if (currentMode === "phone") {
    const phone = document.getElementById("phone").value;
    const otp = document.getElementById("otp").value;
    success = (phone === user.phone && otp === user.otp);
  } else if (currentMode === "username") {
    const uname = document.getElementById("username").value;
    const pass = document.getElementById("username-password").value;
    success = (uname === user.username && pass === user.password);
  }

  message.innerText = success ? "Login successful!" : "Invalid credentials.";
  message.style.color = success ? "green" : "red";
});