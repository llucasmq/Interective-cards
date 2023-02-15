function fedbackMessage() {
  const form = document.querySelector("form");
  const message = document.querySelector(".feedback-message");

  function showMessage(event) {
    event.preventDefault();

    if (form.checkValidity() && !message.classList.contains("ativo")) {
      message.classList.add("ativo");
      // form.submit();
    }
  }

  form.addEventListener("submit", showMessage);
}

fedbackMessage();
