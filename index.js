const toggleBtn = document.getElementById("toggle-btn");
console.log(toggleBtn);
const backgroundChange = document.getElementById("forBackground");
console.log(backgroundChange);
const toggleCOn = document.getElementsByTagName("input");
console.log(toggleCOn);

toggleBtn.addEventListener("click", () => {
//   if (toggleBtn.style.backgroundColor === "#6948ed") {
    backgroundChange.style.background = "white";
    backgroundChange.style.color = "gray";
   // }
//   } else if (toggleBtn.style.backgroundColor === "#555") {
//     backgroundChange.style.background = "gray";
//     backgroundChange.style.color = "white";
//   }
});
