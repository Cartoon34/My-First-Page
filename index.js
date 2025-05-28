document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Example dummy credentials
  const validUser = "admin";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
