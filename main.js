const modal = document.getElementById("modal");
const ctaButton = document.getElementById("cta_button");
const modalCloseButton = document.getElementById("modal__closeBtn");

ctaButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
window.addEventListener("click", clickOutsideModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutsideModal(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
