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
nav_btn.addEventListener('click', () => {
  page6.scrollIntoView({ behavior: 'smooth', block: 'center' })
})

let explr_btn = document.querySelector(".hero .intro .work_github .work")
let pageThree = document.querySelector(".thrd_page")
explr_btn.addEventListener('click', () => {
  pageThree.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
  let response = await fetch("/api/github")
  let data = await response.json()
  let dailyCommits = [0, 0, 0, 0, 0, 0, 0];
  dailyCommits = data.last7Days.map(day => day.contributionCount)
  scandal.forEach((li, index) => {
    let value = dailyCommits[index]
    let day = new Date(data.last7Days[index].date)
      .toLocaleDateString("en-US", { weekday: "long" });
    let height = Math.min(value * 10, 90)
    li.style.height = `${height}%`
    li.title = `${value} on ${day}`;
  })
  let ctrSum = dailyCommits.reduce((total, val) => {
    return total + val
  })
  total_cmts.textContent = ctrSum;
  let ctrCounts = data.last7Days.map(day => day.contributionCount);
  let activeDays = ctrCounts.filter(count => count > 0);
  if (activeDays.length > 0) {
    let conversion = activeDays.length / 7 * 100;
    consistenc_rt.textContent = `${conversion.toFixed(1)}%`;
  } else {
    consistenc_rt.textContent = "0%";
  }
}
github_data()

let rounds = document.querySelectorAll(
  ".round1, .round2, .round3, .round4"
);

rounds.forEach(round => {
  let target = Number(round.dataset.target);
  let progress = 0;

  let interval = setInterval(() => {
    progress++;

    round.style.setProperty("--progress", progress);

    if (progress >= target) {
      clearInterval(interval);
    }
  }, 20);
});

let pageUrl = "https://aman-portfolio-lime-eta.vercel.app/portfolio.html"
let strategy = "desktop"
let apiKey = "AIzaSyC5ZyvtqRHGG-kw1ITBYjWKD2-syjP9_-k"
let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(pageUrl)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo&key=${apiKey}`;
async function getPerformance() {
  let responses = await fetch(apiUrl)
  let datas = await responses.json();
  let categories = datas.lighthouseResult.categories;
  let scores = [
    categories.performance.score * 100,
    categories.accessibility.score * 100,
    categories["best-practices"].score * 100,
    categories.seo.score * 100
  ]
  rounds.forEach((val, index)=>{
    let all_score = scores[index]
    val.textContent = all_score
  })
}
getPerformance()

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

const form = document.querySelector(".sixth_page .sixth_container .email .form")
form.addEventListener('submit', async (fo) => {
  fo.preventDefault();
  const formData = new FormData(form)
  const status = document.querySelector(".sixth_page .sixth_container .status")
  try {
    const response = await fetch("https://formspree.io/f/xppqvepw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
    if (response.ok) {
      status.textContent = "Message sent successfully."
      status.style.display = "inline"
      if (status.style.display = "inline") {
        status.style.opacity = "0.5"
        setTimeout(() => {
          status.style.display = "none"
        }, 1000);
      }
      form.reset()
    } else {
      setTimeout(() => {
        status.textContent = "Something went wrong. Please try again."
      }, 2000);
    }
  }
  catch (error) {
    status.textContent = "Network error. Please try again.";
  }
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