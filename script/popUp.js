document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("portfolioModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.querySelector(".close");

  // Hide modal on page load
  modal.style.display = "none";

  // Open modal
  openModal.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Close modal when clicking the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
