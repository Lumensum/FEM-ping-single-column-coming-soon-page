const form = document.getElementById("form");

const errorEmpty = "Whoops! It looks like you forgot to add your email";
const errorInvalid = "Please provide a valid email address";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  console.log(ValidateEmail());
});

function ValidateEmail() {
  console.log("Trying to Validate Email");

  const validEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // ToDO: Research RFC 2822

  const inputtedEmail = form["input_email"].value;

  if (inputtedEmail == null) {
    console.log(errorEmpty);
    return;
  }

  const emailValidationMessage = document.getElementById("validationmessage");

  if (inputtedEmail.match(validEmailFormat)) {
    return true;
  } else {
    return false;
  }
}
