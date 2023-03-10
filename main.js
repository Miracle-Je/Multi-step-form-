let nextBtn = document.getElementById("next-btn");
let backBtn = document.getElementById("back-btn");
let info = document.querySelector(".info");
let select = document.querySelector(".selecct");
let add = document.querySelector(".add");
let summary = document.querySelector(".summary");
let roundToggle = document.querySelector(".rounded");
let toggleBtn = document.querySelector(".toggle");

let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let count = -1;
let pages = [section2, section3, section4, section5, section6];

nextBtn.addEventListener("click", function () {
  count += 1;
  if (count > 4) {
    count = 4;
  }
  console.log(count);
  if (count == 0) {
    section1.classList.add("hidden");
    document.querySelector(".span1").classList.remove("round");
    document.querySelector(".span2").classList.add("round");
    addPage();
    backBtn.classList.remove("none");
  }

  if (count == 1) {
    section2.classList.add("hidden");
    addPage();
    document.querySelector(".span3").classList.add("round");
    document.querySelector(".span2").classList.remove("round");
  }

  if (count == 2) {
    section3.classList.add("hidden");
    addPage();
    document.querySelector(".span4").classList.add("round");
    document.querySelector(".span3").classList.remove("round");
  }

  if (count == 3) {
    section4.classList.add("hidden");
    addPage();
  }
  if (count == 4) {
    section5.classList.add("hidden");
    addPage();
    document.querySelector(".btn").style.display = "none";
  }
});

backBtn.addEventListener("click", function () {
  count -= 1;

  if (count < -1) {
    count = -1;
  }

  if (count == 3) {
    section6.classList.add("hidden");
    addPage();
  }

  if (count == 2) {
    section5.classList.add("hidden");
    addPage();
  }

  if (count == 1) {
    section4.classList.add("hidden");
    addPage();
    document.querySelector(".span4").classList.remove("round");
    document.querySelector(".span3").classList.add("round");
  }

  if (count == 0) {
    section3.classList.add("hidden");
    addPage();
    document.querySelector(".span3").classList.remove("round");
    document.querySelector(".span2").classList.add("round");
  }

  if (count == -1) {
    section2.classList.add("hidden");
    section1.classList.remove("hidden");
    document.querySelector(".span2").classList.remove("round");
    document.querySelector(".span1").classList.add("round");
  }

  console.log(count);
});

function addPage() {
  pages[count].classList.remove("hidden");
}

function removePage() {
  pages[count].classList.add("hidden");
}

let icon = document.querySelectorAll(".fa-square-check");
// let check2 = document.querySelector(".fa-square-check");
// check3 = document.querySelector(".btn3");

icon[0].addEventListener("click", function () {
  icon[0].classList.toggle("sel");
  document.querySelectorAll(".sec3-container")[0].classList.toggle("back");
  document.querySelectorAll(".sec3-container")[1].classList.remove("back");
  icon[1].classList.remove("sel");
  document.querySelectorAll(".sec3-container")[2].classList.remove("back");
  icon[2].classList.remove("sel");
});

icon[1].addEventListener("click", function () {
  icon[1].classList.toggle("sel");
  document.querySelectorAll(".sec3-container")[1].classList.toggle("back");
  document.querySelectorAll(".sec3-container")[2].classList.remove("back");
  icon[2].classList.remove("sel");
  document.querySelectorAll(".sec3-container")[0].classList.remove("back");
  icon[0].classList.remove("sel");
});

icon[2].addEventListener("click", function () {
  icon[2].classList.toggle("sel");
  document.querySelectorAll(".sec3-container")[2].classList.toggle("back");
  document.querySelectorAll(".sec3-container")[1].classList.remove("back");
  icon[1].classList.remove("sel");
  document.querySelectorAll(".sec3-container")[0].classList.remove("back");
  icon[0].classList.remove("sel");
});

roundToggle.addEventListener("click", function () {
  roundToggle.classList.toggle("my-toggle");
  console.log("mclick");
  document.querySelectorAll(".months")[0].classList.toggle("months-hidden");
  document.querySelectorAll(".months")[1].classList.toggle("months-hidden");
  document.querySelectorAll(".months")[2].classList.toggle("months-hidden");
});
