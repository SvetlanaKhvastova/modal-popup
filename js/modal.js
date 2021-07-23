(() => {
  let scrolled;
  let timer;

  const refs = {
    modal: document.querySelector("[data-modal]"),
    windowBody: document.querySelector("body"),
    logo: document.querySelector(".logo"),
    closeOverlay: document.querySelector(".backdropModal"),
  };

  document.addEventListener("touchmove", toggleModal, false);

  refs.windowBody.addEventListener("mouseout", toggleModal);
  refs.closeOverlay.addEventListener("click", toggleModal);

  window.onscroll = function () {
    toggleModal();
  };

  function toggleModal() {
    scrolled = window.pageXOffset;

    scrollToTop();
    refs.logo.classList.add("modal-open");
    refs.modal.classList.remove("is-hidden");

    refs.windowBody.removeEventListener("mouseout", toggleModal);
  }

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);

      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 1000);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
})();
