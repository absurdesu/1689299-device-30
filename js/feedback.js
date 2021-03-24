const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  name.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
