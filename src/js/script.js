import "bootstrap";
import Popper from "popper.js";
import $ from "jquery";

$(function () {
  $('[data-toggle="popover"]').popover();
});

$(function () {
  $(".download-btn").on("click", function () {
    $(".toast").toast("show");
  });
});

function showCurrentModal() {
  for (let i = 0; i < modalElements.length; i++) {
    if (i === currentObjectIndex) {
      $(modalElements[i]).modal("show");
    } else {
      $(modalElements[i]).modal("hide");
    }
  }
}

let currentObjectIndex = 0;
let modalElements = document.querySelectorAll(".modal");

$(document).on("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    currentObjectIndex--;
    if (currentObjectIndex < 0) {
      currentObjectIndex = modalElements.length - 1;
    }
    showCurrentModal();
  } else if (event.key === "ArrowRight") {
    currentObjectIndex++;
    if (currentObjectIndex >= modalElements.length) {
      currentObjectIndex = 0;
    }
    showCurrentModal();
  }
});
