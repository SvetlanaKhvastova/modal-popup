let style = `
 <style>
body {
  font-family: "Roboto", sans-serif;
}

body.modal-open {
  overflow: hidden;
}

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

.containerFaq {
  color: #1e415f;
  margin-bottom: 44px;
}

.titleFaq {
  text-align: center;
  margin-bottom: 12px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: #1e415f;
}

.listFaq {
  font-family: Roboto;
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
}

.linkFaq {
  padding: 14px 16px 14px 10px;
  background: #f1f7fc;
  border-radius: 5px;
}

.linkFaq:not(:last-child) {
  margin-bottom: 5px;
}

.faqBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.textTitle {
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: start;
  max-width: 267px;
}

.col {
  color: #000000;
}

.faqIconCheck {
  overflow: visible;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  max-width: 100%;
  width: 12px;
  height: 8px;
}

.textFaq {
  position: relative;
  display: inline-block;
  padding-left: 24px;
  padding-right: 18px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #3b3b3b;
}

.hidden {
  display: none;
}

.hiddenbtn {
  display: none;
}

.show {
  display: block;
}
  </style>
`;

let faq = `
<section class="containerFaq">
 <!-- <h1 class="titleFaq">FAQ</h1> -->
    <p class="titleFaq">FAQ</p>

    <ul class="listFaq">
    <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">How does it work?</p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>

        <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">
              Fear of not being able to breathe / Concern of comfort / Feeling
              claustrophobic
            </p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>

        <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">
              That it sticks to the lips. / If my skin would be too sensitive
            </p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>

        <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">
              Wanted to make sure product had a guarantee.
            </p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>

        <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">
              Needed to make sure the company was US based
            </p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>

        <li class="linkFaq">
          <div class="faqBox">
            <p class="textTitle">CPAP compatability</p>

            <div data-controls>
              <span>
                <svg
                  class="faqIconCheck btnMore"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
                    fill="#1E415F"
                  />
                </svg>
              </span>

              <span>
                <svg
                  class="faqIconCheck btnLess hiddenbtn"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z"
                    fill="#4090D1"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p class="textFaq hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nibh
            ipsum faucibus aliquam in pretium. Mauris id amet, id massa nec leo.
            Sollicitudin neque ut ac et tincidunt elit facilisi ac. Viverra.
          </p>
        </li>
      </ul>
</section>`;

document.body.insertAdjacentHTML("afterbegin", style);
// document.body.insertAdjacentHTML("afterbegin", faq);

document
  .querySelector(".easytoapplyandeasytotakeoff")
  .insertAdjacentHTML("beforebegin", faq);

document.querySelectorAll("[data-controls]").forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".linkFaq").querySelector(".textTitle").classList.toggle("col");

    el.closest(".linkFaq").querySelector(".hidden").classList.toggle("show");

    el.closest(".linkFaq").querySelector(".btnLess").classList.toggle("show");

    el.querySelector(".btnMore").classList.toggle("hiddenbtn");
  });
});

// $(document.querySelectorAll("[data-controls]")).forEach((el) => {
//   $(el).click(function () {
//     $(this)
//       .closest(".linkFaq")
//       .querySelector(".textTitle")
//       .classList.toggle("col");

//     $(this)
//       .closest(".linkFaq")
//       .querySelector(".hidden")
//       .classList.toggle("show")
//       .slideToggle(1000);

//     $(this)
//       .closest(".linkFaq")
//       .querySelector(".btnLess")
//       .classList.toggle("show")
//       .slideToggle(1000);

//     $(this)
//       .querySelector(".btnMore")
//       .classList.toggle("hiddenbtn")
//       .slideToggle(1000);
//   });
// });
