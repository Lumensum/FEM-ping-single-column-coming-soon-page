const form = document.getElementById("form");
const thankyoumessage = document.getElementById("thankyoumessage");
const validationmessageContainer = document.getElementById("validationmessage");
const inputField = document.getElementById("input_email");

const errorEmpty = "Whoops! It looks like you forgot to add your email";
const errorInvalid = "Please provide a valid email address";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidateEmail();
});

function ValidateEmail() {
  const validEmailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // ToDO: Research RFC 2822

  var inputtedEmail = inputField.value;

  if (inputtedEmail.match(validEmailFormat)) {
    inputField.classList.remove("invalid");
    validationmessageContainer.setAttribute("hidden", true);
    validationmessageContainer.innerText = "";
    form.style.display = "none";
    thankyoumessage.style.display = "block";
    // Insert email into database
    return true;
  }

  if (inputtedEmail == "") {
    validationmessageContainer.innerText = errorEmpty;
    inputField.classList.add("invalid");
    validationmessageContainer.removeAttribute("hidden");

    return false;
  }

  inputField.classList.add("invalid");
  validationmessageContainer.innerText = errorInvalid;
  validationmessageContainer.removeAttribute("hidden");

  return false;
}
