function inputH1(event) {
  const h1 = document.querySelector(".text h1");
  h1.innerHTML = event.value;

  if (h1.innerHTML === "") {
    h1.innerHTML = "0000 0000 0000 0000";
  }
}

function inputMonth(event) {
  const month = document.querySelector(".month");
  month.innerHTML = event.value;

  if (month.innerHTML === "") {
    month.innerHTML = "00";
  }
}

function inputYear(event) {
  const year = document.querySelector(".year");
  year.innerHTML = event.value;

  if (year.innerHTML === "") {
    year.innerHTML = "00";
  }
}

function inputCvc(event) {
  const cvc = document.querySelector(".cvc p");
  cvc.innerHTML = event.value;

  if (cvc.innerHTML === "") {
    cvc.innerHTML = "000";
  }
}

function inputName(event) {
  const name = document.querySelector(".text-botton p");
  name.innerHTML = event.value;

  if (name.innerHTML === "") {
    name.innerHTML = "Jane Appleseed";
  }
}

function validation() {
  const form = document.forms.card;

  function handleCard(event) {
    const pattern = new RegExp(event.pattern);
    const numberOfDigits = event.value.toString().length;
    var maxLength = event.getAttribute("maxlength");
    var minLength = event.getAttribute("minlength");

    if (!pattern.test(event.value)) {
      event.setCustomValidity("Wrong format, numbers only");
      event.nextElementSibling.innerText = event.validationMessage;
      event.parentElement.classList.add("invalido");
      event.style.border = "1.5px solid red";
    } else if (numberOfDigits > maxLength || numberOfDigits < minLength) {
      event.setCustomValidity("Credit card number must contain 16 digits");
      event.nextElementSibling.innerText = event.validationMessage;
      event.parentElement.classList.add("invalido");
      event.style.border = "1.5px solid red";
    } else {
      event.setCustomValidity("");
      event.nextElementSibling.innerText = "";
      event.parentElement.classList.remove("invalido");
      event.style.border = "";
    }
  }

  function handleExpiration(event) {
    const spanExpiration = document.querySelector(".inline-date span");

    if (event.value === "") {
      event.setCustomValidity("Can't be blank");
      spanExpiration.innerHTML = event.validationMessage;
      event.parentElement.classList.add("invalido");
    } else {
      spanExpiration.innerHTML = "";
      event.parentElement.classList.remove("invalido");
    }
  }

  function handleAll(event) {
    if (event.value === "") {
      event.setCustomValidity("Can't be blank");
      event.nextElementSibling.innerText = event.validationMessage;
      event.parentElement.classList.add("invalido");
      event.style.border = "1.5px solid red";
    } else {
      event.nextElementSibling.innerText = "";
      event.parentElement.classList.remove("invalido");
      event.setCustomValidity("");
      event.style.border = "";
    }
  }

  function handleInput(event) {
    const target = event.target;

    if (target.name === "name") {
      inputName(target);
      handleAll(target);
    } else if (target.name === "card-number") {
      inputH1(target);
      handleCard(target);
    } else if (target.name === "expiration-1") {
      inputMonth(target);
      handleExpiration(target);
      handleAll(target);
    } else if (target.name === "expiration") {
      inputYear(target);
      handleAll(target);
    } else if (target.name === "CVC") {
      inputCvc(target);
      handleAll(target);
    }
  }
  form.addEventListener("input", handleInput);
}
validation();
