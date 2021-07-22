(() => {
  const refs = {
    modal: document.querySelector("[data-modal]"),
    windowBody: document.querySelector("body"),
    logo: document.querySelector(".logo"),
  };

  refs.windowBody.addEventListener("mouseout", toggleModal);

  function toggleModal() {
    refs.logo.classList.add("modal-open");
    refs.modal.classList.remove("is-hidden");

    refs.windowBody.removeEventListener("mouseout", toggleModal);
  }
})();
