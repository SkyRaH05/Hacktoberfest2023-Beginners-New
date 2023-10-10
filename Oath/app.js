// "use strict";

// const a = document.querySelector("btn");

// if (a) {
//   a.addEventListener("click", () => {
//     document.querySelector("con").style.display = "none";
//     document.querySelector("sec-form").style.display = "block";
//   });
// }
"use strict";

const a = document.querySelector("btn");
const con = document.querySelector("con");
const secForm = document.querySelector("sec-form");

if (a && con && secForm) {
  a.addEventListener("click", () => {
    con.style.display = "none";
    secForm.style.display = "block";
  });
}
