const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});

function ValidateEmail() {
  console.log("Trying to Validate Email");

  const validEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // ToDO: Research RFC 2822

  const inputtedEmail = document.getElementById("input_email");
  const emailValidationMessage = document.getElementById(
    "header__validationmessage"
  );

  if (inputtedEmail.value.match(validEmailFormat)) {
    console.log("Valid email address!");
    return true;
  } else {
    console.log("Invalid email address!");
    return false;
  }
}
