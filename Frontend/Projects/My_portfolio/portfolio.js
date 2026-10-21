let theme = document.querySelector(".toggle")
let iswhite = false
theme.addEventListener('click', () => {
  if (iswhite) {
    document.body.style.background = "#0B0F19"
    document.body.style.color = "white"
    document.body.style.backgroundImage = "radial-gradient(ellipse 50% 9% at 20% 9%, #6365f11e, transparent 80%), radial-gradient(ellipse 80% 14% at 45% 9%, #06b5d42d, transparent 80%), radial-gradient(ellipse 60% 15% at 47% 45%, #6365f12b, transparent 80%), radial-gradient(ellipse 100% 9% at 20% 72.8%, #06b5d42d, transparent 100%)"
    iswhite = false
  }
  else {
    document.body.style.background = "white"
    document.body.style.color = "black"

    iswhite = true
  }
})
let nav_btn = document.querySelector(".nav_btns .contact")
let page6 = document.querySelector(".sixth_page")
nav_btn.addEventListener('click', ()=>{
  page6.scrollIntoView({behavior: 'smooth', block: 'center'})
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
  let dailyCommits = [0, 0, 0, 0, 0, 0, 0];
  let today = new Date();
  pushEvent.forEach(event => {
    var eventDate = new Date(event.created_at)
    // console.log(today)
    // console.log(eventDate)
    var difference = today - eventDate
    var daysAgo = difference / (1000 * 60 * 60 * 24)
    if (daysAgo >= 0 && daysAgo < 7) {
      // console.log(Math.floor(daysAgo)+ " Day" )
    }
  });
}
github_data()
let button1 = document.querySelector(".button1")
button1.addEventListener('click', () => {
  window.open("https://github.com/aman-codezz")
})
let button2 = document.querySelector(".button2")
button2.addEventListener('click', () => {
  window.open("https://www.linkedin.com/in/mohd-aman-413a58202/?isSelfProfile=true")
})
let button3 = document.querySelector(".button3")
button3.addEventListener('click', () => {
  window.open("https://leetcode.com/u/amannn23/")
})
let button4 = document.querySelector(".button4")
button4.addEventListener('click', () => {
  window.open("https://vercel.com/aman-dev5")
})
// let li1 = document.querySelector(".nav_links  .one")
// li1.addEventListener('click', ()=>{
//   window.scrollTo({
//   top: 1630,
//   behavior: "smooth",
// })
// })
document.querySelectorAll(".nav_links .links").forEach(e => {
  e.addEventListener('click', (events) => {
    events.preventDefault();
    const link1 = document.querySelector(".nav_links .one")
    var page3 = document.querySelector(".thrd_page")

    const link2 = document.querySelector(".nav_links .two")
    var pageStack = document.querySelector(".lang ul")

    const link3 = document.querySelector(".nav_links .three")
    var page4 = document.querySelector(".forth_page")

    const link4 = document.querySelector(".nav_links .four")
    var page5 = document.querySelector(".fifth_page")

    if (e.classList.contains("one")) {
      page3.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else if (e.classList.contains("two")) {
      pageStack.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    else if (e.classList.contains("three")) {
      page4.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else if (e.classList.contains("four")) {
      page5.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  })
})
document.querySelectorAll(".lasts li").forEach(en => {
  en.addEventListener('click', (eve) => {
    eve.preventDefault(); // Prevents default jump behavior if these are <a> tags

    // Selecting the target sections correctly for this block
    const pageTeen = document.querySelector(".thrd_page");
    const page1 = document.querySelector(".lang ul");

    if (en.classList.contains("ek")) {
      pageTeen.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else if (en.classList.contains("do")) {
      page1.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});