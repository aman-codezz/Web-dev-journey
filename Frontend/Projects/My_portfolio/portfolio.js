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
let scandal = document.querySelectorAll("#git-chart li")
let consistenc_rt = document.querySelector("#consistency-rate")
let total_cmts = document.querySelector("#total-commits")
let github_data = async function () {
  let response = await fetch("https://api.github.com/users/aman-codezz/events")
  let data = await response.json()
  let pushEvent = data.filter((e) => (e.type === "PushEvent"))
  // console.log(pushEvent)
  let dailyCommits = [0,0,0,0,0,0,0];
  let today = new Date();
  pushEvent.forEach(event => {
    var eventDate = new Date(event.created_at)
    console.log(today)
    console.log(eventDate)
    var difference= today - eventDate
    var daysAgo = difference / (1000 * 60 * 60 *24)
    if(daysAgo >=0 && daysAgo < 7){
      console.log(Math.floor(daysAgo)+ " Day" )
    }
  });
}
github_data()
let button1 = document.querySelector(".button1")
button1.addEventListener('click', ()=>{
  window.open("https://github.com/aman-codezz")
})
let button2 = document.querySelector(".button2")
button2.addEventListener('click', ()=>{
  window.open("https://www.linkedin.com/in/mohd-aman-413a58202/?isSelfProfile=true")
})
let button3 = document.querySelector(".button3")
button3.addEventListener('click', ()=>{
  window.open("https://leetcode.com/u/amannn23/")
})
let button4 = document.querySelector(".button4")
button4.addEventListener('click', ()=>{
  window.open("https://vercel.com/aman-dev5")
})