let theme = document.querySelector(".toggle")
let iswhite = false
theme.addEventListener('click', () => {
    if (iswhite) {
        document.body.style.background = "#0B0F19"
        document.body.style.color = "white"
        iswhite = false
    }
    else {
        document.body.style.background = "white"
        document.body.style.color = "black"
        iswhite = true
    }
})

const copyButton = document.querySelector(".cpy_btn");
copyButton.addEventListener("click", () => {
  const codeLines = document.querySelectorAll(".mac_disp .line");
  const fullCode = Array.from(codeLines)
    .map((li) => li.innerText)
    .join("\n");
  navigator.clipboard.writeText(fullCode)
//     .then(() => {
//         // 5. Reset after 1.5 seconds
//       setTimeout(() => {
//         copyButton.style.outline = "none";
//         copyButton.style.filter = "none";
//       }, 1500);
//     })
//     .catch((error) => {
//       console.error("Failed to copy code:", error);
//     });
});