import { login } from "../endpoints.js";

window.onload = () => {
  document.forms.login.addEventListener("submit", formSubmission);
};

const formSubmission = (event) => {
  event.preventDefault();
  var formData = new FormData(event.target);

  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  fetch(login, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      //   console.log("jwt=" + data.data[0]["jwt"]);
      document.cookie = "";
      document.cookie = "jwt=" + data.data[0]["jwt"];
      window.location.href = `${document.location.origin}/blog-frontend/`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
