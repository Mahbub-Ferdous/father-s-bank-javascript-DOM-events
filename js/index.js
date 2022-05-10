// client login logic match and connect login button to another pages:
document.getElementById("loginButton").addEventListener("click", function () {
  // get user gmail
  const emailField = document.getElementById("email");
  const userEmail = emailField.value; // catch user input email in this field using value
  // get user password
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value; // catch what user write in input field by using value
  // this logic is not proper system to get user auth its for just now
  if (userEmail == "apache@gmail.com" && userPassword == "apache") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong Password");
  }
});
