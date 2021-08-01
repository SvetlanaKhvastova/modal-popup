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
