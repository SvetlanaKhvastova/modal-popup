(() => {
  const refs = {
    modal: document.querySelector("[data-modal]"),
    windowBody: document.querySelector("body"),
    logo: document.querySelector(".logo"),
    closeOverlay: document.querySelector(".backdropModal"),
    buttonClose: document.querySelector(".button"),
  };

  let scrolled;
  let timer = 0;

  refs.logo.addEventListener("mouseout", toggleModal);
  refs.closeOverlay.addEventListener("click", toggleModal);
  refs.buttonClose.addEventListener("click", toggleModal);

  document.addEventListener("touchmove", toggleModal);
  // window.onscroll = toggleModal();

  function toggleModal() {
    scrolled = window.pageYOffset;
    console.log(window.pageYOffset);
    scrollToTop();

    refs.logo.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");

    // refs.windowBody.removeEventListener("mouseout", toggleModal);
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
