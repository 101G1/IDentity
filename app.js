// Define a global variable to act as a simple database
let users = [];

// Function to handle sign-up form submission
function signUp() {
  const schoolId = document.querySelector('.sign-up-form input[type="text"]').value.trim();
  const email = document.querySelector('.sign-up-form input[type="email"]').value.trim();
  const password = document.querySelector('.sign-up-form input[type="password"]').value.trim();
  const userType = document.querySelector('#userTypeSignUp').value;

  // Check if any of the fields are empty
  if (!schoolId || !email || !password) {
    alert('Please fill up all the fields.');
    return; // Exit the function without registering the user
  }

  // Create a user object
  const newUser = {
    schoolId: schoolId,
    email: email,
    password: password,
    userType: userType
  };

  // Add the new user to the database
  users.push(newUser);

  // Display congratulatory message
  alert('Congratulations! You have successfully registered.');

  // Optionally, you can clear the form fields after submission
  document.querySelector('.sign-up-form').reset();
}

// Function to handle sign-in form submission
function signIn() {
  const schoolId = document.querySelector('.sign-in-form input[type="text"]').value.trim();
  const password = document.querySelector('.sign-in-form input[type="password"]').value.trim();
  const userType = document.querySelector('#userType').value;

  // Check if the user exists in the database
  const user = users.find(user => user.schoolId === schoolId && user.password === password && user.userType === userType);

  if (user) {
    alert('Sign in successful!');
    // Redirect the user to another page
    window.location.href = "homie.html";
  } else {
    alert('Invalid credentials. Please try again.');
  }

  // Optionally, you can clear the form fields after submission
  document.querySelector('.sign-in-form').reset();
}

// Event listeners for form submissions
document.querySelector('.sign-up-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  signUp(); // Call the signUp function
});

document.querySelector('.sign-in-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  signIn(); // Call the signIn function
});

// Event listeners for sign-in/sign-up switch
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
