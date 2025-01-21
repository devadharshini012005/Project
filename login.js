const jpdbBaseURL = "https://api.login2explore.com:5577";
const jpdbToken = "90932151|-31949221147618108|90963797	";
const dbName = "bookstore";
const userRelationName = "login-user";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Query JPDB to find user by email
  const query = { email: email };
  const requestPayload = createGET_BY_KEYRequest(jpdbToken, dbName, userRelationName, JSON.stringify(query));

  // Fetch user data from JPDB
  $.ajax({
    url: `${jpdbBaseURL}/api/irl`,
    type: "POST",
    data: requestPayload,
    contentType: "application/json",
    success: function (response) {
      if (response.data) {
        const user = JSON.parse(response.data);

        // Compare passwords (use a hashed password check in production)
        if (user.password === password) {
          alert(`Welcome back, ${user.name}!`);
          window.location.href = "homepage.html"; // Redirect after successful login
        } else {
          alert("Incorrect password. Please try again.");
        }
      } else {
        alert("User not found. Please register first.");
      }
    },
    error: function (err) {
      console.error("Login error:", err);
      alert("An error occurred during login. Please try again.");
    },
  });
});
