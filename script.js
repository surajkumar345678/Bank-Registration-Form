function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  console.log(password, confirmPassword);
  let message = document.getElementById("message");
  if (password.length != 0) {
      if (password == confirmPassword) {
          message.textContent = "Password match";
          message.style.color = "#00FF00";
      } else {
          message.textContent = "Password does not match";
          message.style.color = "#FF0000";
      }
  } else {
      alert("All details are compulsory. Please fill all details.");
      message.textContent = "";
  }
}

function callValue() {
  var acno = document.getElementById("account-number").value;
  var actype = document.getElementById("account-type").value;
  var cifno = document.getElementById("cif-number").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var country = document.getElementById("country").value;
  var radio = document.querySelector('input[name="facility"]:checked').value;

  document.writeln("UNIVERSAL BANK <br>");
  document.writeln("Your Details: <br>");
  document.writeln("Account Number: " + acno + "<br>");
  document.writeln("Account Type: " + actype + "<br>");
  document.writeln("CIF Number: " + cifno + "<br>");
  document.writeln("Username: " + username + "<br>");
  document.writeln("Password: " + password + "<br>");
  document.writeln("Country: " + country + "<br>");
  document.writeln("Facility Required: " + radio + "<br>");
}
