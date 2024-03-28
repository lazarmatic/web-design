const form = document.querySelector("form");
(eField = form.querySelector(".email")),
  (eInput = eField.querySelector("input")),
  (pField = form.querySelector(".password")),
  (pInput = pField.querySelector("input"));
(iField = form.querySelector(".name")),
  (iInput = iField.querySelector("input"));
(bField = form.querySelector(".phone")),
  (bInput = bField.querySelector("input"));
form.onsubmit = (e) => {
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
  pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();
  iInput.value == "" ? iField.classList.add("shake", "error") : checkName();
  bInput.value == "" ? bField.classList.add("shake", "error") : checkPhone();

  setTimeout(() => {
    //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    iField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);
  eInput.onkeyup = () => {
    checkEmail();
  }; //calling checkEmail function on email input keyup
  pInput.onkeyup = () => {
    checkPass();
  }; //calling checkPassword function on pass input keyup
  iInput.onkeyup = () => {
    checkName();
  }; //calling checkName function on name input keyup
  bInput.onkeyup = () => {
    checkPhone();
  }; //calling checkPhone function on email input keyup
  function checkEmail() {
    //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if (!eInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput.value != ""
        ? (errorTxt.innerText = "Unesite ispravnu Email adresu")
        : (errorTxt.innerText = "Molimo Vas upišite vaš Email");
    } else {
      //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
  function checkPass() {
    //checkPass function
    if (pInput.value == "") {
      //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    } else {
      //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
  function checkName() {
    //checkName function
    let pattern = /^[a-zA-Z]+ [a-zA-Z]+$/; //pattern for validate name
    if (!iInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      iField.classList.add("error");
      iField.classList.remove("valid");
      let errorTxt = iField.querySelector(".error-txt");
      //if name value is not empty then show please enter valid name else show Name can't be blank
      iInput.value != ""
        ? (errorTxt.innerText = "Unesite ispravno ime i prezime")
        : (errorTxt.innerText = "Molimo Vas upišite vaše ime");
    } else {
      //if pattern matched then remove error and add valid class
      iField.classList.remove("error");
      iField.classList.add("valid");
    }
  }
  function checkPhone() {
    //checkPhone function
    let pattern = /^(\s*\d{9}\s*)(,\s*\d{9}\s*)*,?\s*$/; //pattern for validate phone
    if (!bInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      bField.classList.add("error");
      bField.classList.remove("valid");
      let errorTxt = bField.querySelector(".error-txt");
      //if phone value is not empty then show please enter valid phone else show phone can't be blank
      bInput.value != ""
        ? (errorTxt.innerText = "Unesite ispravan broj telefona")
        : (errorTxt.innerText = "Molimo Vas upišite vaš broj telefona");
    } else {
      //if pattern matched then remove error and add valid class
      bField.classList.remove("error");
      bField.classList.add("valid");
    }
  }

  //if eField , pField , iField and bField doesn't contains error class that mean user filled details properly
  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error") &&
    !iField.classList.contains("error") &&
    !bField.classList.contains("error")
  ) {
    var myWindow = window.open("login.html", "_self"); //redirecting user to the specified url which is inside action attribute of form tag
  }
};
