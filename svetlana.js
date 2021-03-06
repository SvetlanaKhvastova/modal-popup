let style = `
    <style>
h1,
h2,
h2,
p,
ul {
  margin: 0;
  padding: 0;
}

.enumeration {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.button {
  display: inline-block;
  min-width: 261px;
  padding: 17px 49px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #ffffff;
  background-color: #161622;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  line-height: 1.57;
  text-align: center;
  cursor: pointer;
}

@media (min-width: 569px) {
  .button {
    min-width: 307px;
    padding: 17px 72px;
  }
}

.backdropModal {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
  z-index: 1;
  visibility: visible;
  -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.backdropModal.is-hidden {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modalPopUp {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 296px;
  padding: 24px 19px 18px 16px;
  text-align: center;
  color: #000000;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #ffffff;
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

@media (min-width: 569px) {
  .modalPopUp {
    max-width: 529px;
    padding: 20px 20px 20px 13px;
  }
}

.formTitle {
  padding: 18px 19px 20px 20px;
  margin-bottom: 34px;
  background: #f5f5f5;
  color: #000000;
  border-radius: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
}

@media (min-width: 569px) {
  .formTitle {
    padding: 10px 83px;
    margin-bottom: 14px;
    font-size: 22px;
    line-height: 1.14;
  }
}

.formText {
  margin-bottom: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.64;
  color: #ef4e44;
}

@media (min-width: 569px) {
  .formText {
    margin-bottom: 14px;
  }
}

.formTextDate {
  margin-bottom: 34px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  color: #000000;
}

@media (min-width: 569px) {
  .formTextDate {
    margin-bottom: 17px;
  }
}

.formTextDateSpan {
  display: block;
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
}

@media (min-width: 569px) {
  .formTextDateSpan {
    display: inline;
    margin-top: 0;
  }
}

.formList {
  list-style: none;
  margin-left: 22px;
  padding: 0;
  margin-bottom: 34px;
  text-align: start;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.69;
  color: #000000;
}

@media (min-width: 569px) {
  .formList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 15px;
    margin-bottom: 18px;
  }
}

.formLink {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.formLink:not(:last-child) {
  margin-bottom: 9px;
}

@media (min-width: 569px) {
  .formLink:not(:last-child) {
    margin-bottom: 0;
    margin-right: 12px;
  }
}

.formIconCheck {
  overflow: visible;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  margin-right: 8px;
  max-width: 100%;
  width: 16px;
  height: 16px;
  fill: #ef4e44;
}

.formLinkText {
  font-weight: 500;
  font-size: 13px;
  line-height: 1.69;
  color: #000000;
}

.formLeave {
  display: block;
  margin-top: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
  color: #000000;
  opacity: 0.7;
}

@media (min-width: 569px) {
  .formLeave {
    margin-bottom: 7px;
  }
}
    </style>
`;

let popup = `
<section>
    
      <div class="backdropModal is-hidden" data-modal>
        <div class="modalPopUp">
          <form>
            <h1 class="formTitle">Don???t lose your quiz progress...</h1>
            <p class="formText">
              If you leave the page, your personalized fasting plan will be lost
            </p>
            <p class="formTextDate">
              50kg <span class="formTextDateSpan"> by October 9, 2020</span>
            </p>
            <ul class="formList">
              <li class="formLink">
                 <svg
                  class="formIconCheck"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.74188 10.4127L5.84797 10.5187L5.95399 10.4126L14.3895 1.97263L14.3899 1.97295L14.3974 1.96416C14.4948 1.85044 14.5457 1.70417 14.5399 1.55456C14.5341 1.40495 14.4721 1.26303 14.3662 1.15717C14.2603 1.0513 14.1184 0.989279 13.9688 0.9835C13.8192 0.977721 13.6729 1.02861 13.5592 1.12599L13.5589 1.12566L13.5508 1.1338L5.83907 8.83675L1.94507 4.94275L1.94539 4.94243L1.93657 4.93488C1.82286 4.8375 1.67658 4.78661 1.52697 4.79239C1.37736 4.79817 1.23545 4.86019 1.12958 4.96606C1.02371 5.07192 0.961691 5.21384 0.955912 5.36345C0.950133 5.51306 1.00102 5.65933 1.09841 5.77305L1.09806 5.77335L1.10632 5.7816L5.74188 10.4127Z"
                    fill="#EF4E44"
                    stroke="#EF4E44"
                    stroke-width="0.3"
                  />
                </svg>
                <p class="formLinkText">30-day money back guarantee.</p>
              </li>
              <li class="formLink">
               
                <svg
                  class="formIconCheck"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.74188 10.4127L5.84797 10.5187L5.95399 10.4126L14.3895 1.97263L14.3899 1.97295L14.3974 1.96416C14.4948 1.85044 14.5457 1.70417 14.5399 1.55456C14.5341 1.40495 14.4721 1.26303 14.3662 1.15717C14.2603 1.0513 14.1184 0.989279 13.9688 0.9835C13.8192 0.977721 13.6729 1.02861 13.5592 1.12599L13.5589 1.12566L13.5508 1.1338L5.83907 8.83675L1.94507 4.94275L1.94539 4.94243L1.93657 4.93488C1.82286 4.8375 1.67658 4.78661 1.52697 4.79239C1.37736 4.79817 1.23545 4.86019 1.12958 4.96606C1.02371 5.07192 0.961691 5.21384 0.955912 5.36345C0.950133 5.51306 1.00102 5.65933 1.09841 5.77305L1.09806 5.77335L1.10632 5.7816L5.74188 10.4127Z"
                    fill="#EF4E44"
                    stroke="#EF4E44"
                    stroke-width="0.3"
                  />
                </svg>
                <p class="formLinkText">No commitments. Cancel anytime.</p>
              </li>
            </ul>
            <button class="button">Save my plan & ??ontinue</button>

            <a href="#" class="formLeave">Leave anyway</a>
          </form>
        </div>
      </div>
    </section>
`;

document.body.insertAdjacentHTML("afterbegin", style);

document.body.insertAdjacentHTML("beforeend", popup);

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
