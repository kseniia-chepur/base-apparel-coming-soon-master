let signUpBtn = document.querySelector("#btn");

function checkEmailValidity(event) {
  event.preventDefault();

  let input = document.querySelector("#email-input");
  let message = document.querySelector("#message");
  let EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!input.value) {
    message.innerHTML = "The email address is missing";
    message.style.color = "red";
    input.style.borderColor = "red";
  } else if (!EMAIL_REGEXP.test(input.value)) {
    message.innerHTML = "Please provide a valid email";
    message.style.color = "red";
    input.style.borderColor = "red";
  } else {
    message.innerHTML = "Thank you for signing up!";
    message.style.color = "black";
    input.style.borderColor = "#ce9797";
  }
}

signUpBtn.addEventListener("click", checkEmailValidity);
