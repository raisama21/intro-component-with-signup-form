const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  const fName = document.querySelector("#fname");
  const lName = document.querySelector("#lname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  e.preventDefault();
  validateFirstName(fName);

  validateLastName(lName);

  validateEmail(email);

  validatePassword(password);
});

function validateFirstName(input) {
  if (input.value === "" || input.value === null) {
    input.nextElementSibling.textContent = "First Name cannot be empty";
    input.previousElementSibling.style.display = "block";
  }
}

function validateLastName(input) {
  if (input.value === "" || input.value === null) {
    input.nextElementSibling.textContent = "Last Name cannot be empty";
    input.previousElementSibling.style.display = "block";
  }
}

function validateEmail(input) {
  let emailformat =
    /^([a-zA-z0-9\.-]+)@([a-zA-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

  if (emailformat.test(input.value)) {
    input.nextElementSibling.textContent = "";
  } else {
    input.nextElementSibling.textContent = "Looks like this is not an email";
    input.previousElementSibling.style.display = "block";
  }

  if (input.value === "" || input.value === null) {
    input.nextElementSibling.textContent = "Email cannot be empty";
    input.previousElementSibling.style.display = "block";
  }
}

function validatePassword(input) {
  if (input.value.length <= 8) {
    input.nextElementSibling.textContent =
      "Password cannot be less than 8 character";
    input.previousElementSibling.style.display = "block";
  }

  if (input.value.length >= 32) {
    input.nextElementSibling.textContent =
      "Password cannot be more than 32 character";
    input.previousElementSibling.style.display = "block";
  }

  if (input.value === "" || input.value === null) {
    input.nextElementSibling.textContent = "Password cannot be empty";
    input.previousElementSibling.style.display = "block";
  }
}
