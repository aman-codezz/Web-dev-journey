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
});

let github = document.querySelector(".github")
github.addEventListener('click', () => {
  window.open("https://github.com/aman-codezz")
})
let scandal = document.querySelector("#git-chart li")
let consistenc_rt = document.querySelector("#consistency-rate")
let total_cmts = document.querySelector("#total-commits")
let github_data = async function(){
  let response = await fetch("https://api.github.com/users/aman-codezz/events")
  let data = await response.json()
  let pushEvent = data.filter((e)=> (e[0]))
  console.log(pushEvent)
}
github_data()