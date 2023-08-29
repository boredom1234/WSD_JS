const registrationForm = document.getElementById("registrationForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const dobInput = document.getElementById("dob");
const submitButton = document.querySelector("button[type='submit']");

fullNameInput.addEventListener("input", validateFullName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", matchPasswords);
dobInput.addEventListener("input", calculateAge);
registrationForm.addEventListener("submit", validateForm);

function validateFullName() {
  const fullName = fullNameInput.value.trim();
  const fullNameError = document.getElementById("fullNameError");
  if (fullName.length < 3 || !/^[A-Za-z\s]+$/.test(fullName)) {
    fullNameError.textContent =
      "❌ | Full name must be at least 3 characters long and contain only alphabetic characters and spaces.";
    fullNameInput.style.borderBlockColor = "red";
  } else {
    fullNameError.textContent = "✅";
    fullNameInput.style.borderBlockColor = "green";
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailError = document.getElementById("emailError");
  if (!isValidEmail(email)) {
    emailError.textContent = "❌ | Please enter a valid email address.";
    emailInput.style.borderBlockColor = "red";
  } else {
    emailError.textContent = "✅";
    emailInput.style.borderBlockColor = "green";
  }
}

function validatePassword() {
  const password = passwordInput.value;
  const passwordError = document.getElementById("passwordError");
  if (
    password.length < 8 ||
    !/\d/.test(password) ||
    !/[a-zA-Z]/.test(password)
  ) {
    passwordError.textContent =
      "❌ | Password must be at least 8 characters long and contain a mix of letters and numbers.";
    passwordInput.style.borderBlockColor = "red";
  } else {
    passwordError.textContent = "✅";
    passwordInput.style.borderBlockColor = "green";
  }
}

function matchPasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "❌ | Passwords do not match.";
    confirmPasswordInput.style.borderBlockColor = "red";
  } else {
    confirmPasswordError.textContent = "✅";
    confirmPasswordInput.style.borderBlockColor = "green";
  }
}

function calculateAge() {
  const dob = dobInput.value;
  const dobError = document.getElementById("dobError");
  if (!isValidDateOfBirth(dob)) {
    dobError.textContent =
      "❌ | Please enter a valid date in the format YYYY-MM-DD, and you must be at least 18 years old.";
    submitButton.disabled = true;
    dobInput.style.borderBlockColor = "red";
  } else {
    dobError.textContent = "✅";
    dobInput.style.borderBlockColor = "green";
    submitButton.disabled = false;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidDateOfBirth(dob) {
  const today = new Date();
  const birthDate = new Date(dob);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dob) || isNaN(birthDate)) {
    return false;
  }

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1 >= 18;
  }

  return age >= 18;
}

function validateForm(event) {
  validateFullName();
  validateEmail();
  validatePassword();
  matchPasswords();
  calculateAge();

  const errorElements = document.getElementsByClassName("error");
  let isValid = true;

  for (const errorElement of errorElements) {
    if (errorElement.textContent !== "") {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    if (event) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  }

  submitButton.disabled = !isValid; // Enable/disable the submit button based on form validity
}

function success() {
  alert("OK");
}
