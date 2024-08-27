const form = document.getElementById("form");

/* INPUT */
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const query = document.getElementsByName("query-type");
const message = document.getElementById("message");
const agreement = document.getElementById("agreement");

/* ERROR */
const error__fname = document.getElementById("error__fname");
const error__lname = document.getElementById("error__lname");
const error__email = document.getElementById("error__email");
const error__query = document.getElementById("error__query");
const error__message = document.getElementById("error__message");
const error__agreement = document.getElementById("error__agreement");

/* SUCCESS MESSAGE */
const success__message = document.getElementById("success__message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    firstName: null,
    lastName: null,
    emailAddress: null,
    queryType: null,
    message: null,
    agreement: false,
  };

  if (fname.value === "") {
    error__fname.style.display = "block";
  } else {
    error__fname.style.display = "none";
    user.firstName = fname.value;
  }

  if (lname.value === "") {
    error__lname.style.display = "block";
  } else {
    error__lname.style.display = "none";
    user.lastName = lname.value;
  }

  if (email.value === "") {
    error__email.style.display = "block";
  } else {
    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regex.test(email.value)) {
      error__email.style.display = "none";
      user.emailAddress = email.value;
    } else {
      error__email.style.display = "block";
    }
  }

  if (query) {
    var checked = false;
    for (i = 0; i < query.length; i++) {
      if (query[i].checked) {
        user.queryType = query[i].value;
        checked = true;
      }
    }
    if (checked) {
      error__query.style.display = "none";
    } else {
      error__query.style.display = "block";
    }
  }

  if (message.value === "") {
    error__message.style.display = "block";
  } else {
    error__message.style.display = "none";
    user.message = message.value;
  }

  if (agreement.checked) {
    error__agreement.style.display = "none";
    user.agreement = agreement.checked;
  } else {
    error__agreement.style.display = "block";
  }

  if (
    user.firstName != null &&
    user.lastName != null &&
    user.emailAddress != null &&
    user.queryType != null &&
    user.message != null &&
    user.agreement != false
  ) {
    success__message.classList.add("show");

    setTimeout(function () {
      success__message.classList.remove("show");
    }, 5000);
  }
});
