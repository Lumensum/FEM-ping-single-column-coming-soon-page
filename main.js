const form = document.getElementById("form");
const validationmessageContainer = document.getElementById("validationmessage");
const inputField = document.getElementById("input_email");

const errorEmpty = "Whoops! It looks like you forgot to add your email";
const errorInvalid = "Please provide a valid email address";
const emailValidationMessage = document.getElementById("validationmessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidateEmail();
});

function ValidateEmail() {
  const validEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // ToDO: Research RFC 2822

  var inputtedEmail = form["input_email"].value;

  if (inputtedEmail.match(validEmailFormat)) {
    inputField.classList.remove("invalid");
    validationmessageContainer.classList.add("hideMe");
    validationmessageContainer.innerText = "";
    alert("Thank you for signing up!");
    return true;
  }

  if (inputtedEmail == "") {
    validationmessageContainer.innerText = errorEmpty;
    inputField.classList.add("invalid");
    validationmessageContainer.classList.remove("hideMe");
    return false;
  }

  inputField.classList.add("invalid");
  validationmessageContainer.innerText = errorInvalid;
  validationmessageContainer.classList.remove("hideMe");

  return false;
}
