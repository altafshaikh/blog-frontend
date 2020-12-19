import { signup } from "../endpoints.js";

window.onload = () => {
  document.forms.signup.addEventListener("submit", formSubmission);
};

const formSubmission = (event) => {
  event.preventDefault();
  var formData = new FormData(event.target);

  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  fetch(signup, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = `${document.location.origin}/blog-frontend/login.html`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("cookie", document.cookie);
});
