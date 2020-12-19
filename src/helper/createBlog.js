import { endpoint } from "../endpoints.js";

window.onload = () => {
  document.forms.createBlog.addEventListener("submit", formSubmission);
};

const formSubmission = (event) => {
  event.preventDefault();

  var formData = new FormData(event.target);

  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  let myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    "Bearer " + document.cookie.split(";")[0].split("=")[1]
  );

  //   myHeaders.append("Content-Type", "undefined");

  //   console.log(formObject);

  fetch(endpoint, {
    method: "POST", // or 'PUT'
    headers: myHeaders,
    body: formObject,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
