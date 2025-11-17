// Login Valid
function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var popUpF = document.getElementById("pop-up-f");
  var spanF = document.getElementsByClassName("closePopUpF")[0];

  spanF.onclick = function () {
    popUpF.style.display = "none";
  };

  // popUpF.addEventListener("click", (e) => {
  //   if (e.target === popUpF) {
  //     popUpF.style.display = "none";
  //   }
  // });

  if (
    username == "Ari ZM" &&
    email == "azm@gmail.com" &&
    password == "admin123"
  ) {
  } else {
    popUpF.style.animation = "animatetop 0.2s";
    popUpF.style.display = "block";

    return false;
  }
}
