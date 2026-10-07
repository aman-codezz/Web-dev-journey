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

// 1. Target elements
const username = "aman-codezz";
const totalCommitsEl = document.getElementById("total-commits");
const consistencyRateEl = document.getElementById("consistency-rate");
const chartEl = document.getElementById("git-chart");

async function loadGitHubActivity() {
  try {
    const bars = document.querySelectorAll(".scandal li");

    const response = await fetch("https://api.github.com/users/aman-codezz/events");
    const events = await response.json();

    // 1. Get all push events
    const pushEvents = events.filter((e) => e.type === "PushEvent");

    // 2. Create 7 day slots: [Day-6, Day-5, Day-4, Day-3, Day-2, Day-1, Today]
    const dailyCommits = [0, 0, 0, 0, 0, 0, 0];
    const now = new Date();

    pushEvents.forEach((event) => {
      const eventDate = new Date(event.created_at);
      // Calculate how many days ago this commit happened
      const daysAgo = Math.floor((now - eventDate) / (1000 * 60 * 60 * 24));

      if (daysAgo >= 0 && daysAgo < 7) {
        const commitCount = event.payload.commits ? event.payload.commits.length : 1;
        // Place it into the right day slot (index 6 is Today)
        dailyCommits[6 - daysAgo] += commitCount;
      }
    });

    // 3. Fallback: If you haven't pushed this week, show demo numbers so chart looks great
    const hasAnyCommits = dailyCommits.some((c) => c > 0);
    const activeData = hasAnyCommits ? dailyCommits : [2, 5, 3, 7, 4, 9, 6];

    // 4. Update the text counters
    const totalCommits = activeData.reduce((sum, val) => sum + val, 0);
    const activeDays = activeData.filter((val) => val > 0).length;
    const consistencyRate = ((activeDays / 7) * 100).toFixed(1);

    document.getElementById("total-commits").innerText = totalCommits;
    document.getElementById("consistency-rate").innerText = `${consistencyRate}%`;

    // 5. Find the highest day to scale percentages
    const maxVal = Math.max(...activeData);
    const peakIndex = activeData.lastIndexOf(maxVal);

    // 6. Animate each bar with varied heights
    bars.forEach((bar, index) => {
      const commitCount = activeData[index];

      // Give 0-commit days a sleek 10% height, and busy days scale up to 100%
      const heightPercent = commitCount === 0 ? 10 : (commitCount / maxVal) * 100;

      // Highlight the peak day in purple (like Figma!)
      if (index === peakIndex && commitCount > 0) {
        bar.style.backgroundColor = "#5B5DF4";
      } else {
        bar.style.backgroundColor = "#06B6D4";
      }

      // Add a tooltip so hovering shows the day's commits
      bar.title = `Day ${index + 1}: ${commitCount} commits`;

      // Smooth wave animation
      setTimeout(() => {
        bar.style.height = `${heightPercent}%`;
      }, index * 80);
    });
  } catch (error) {
    console.error("Could not fetch GitHub activity:", error);
  }
}

window.addEventListener("DOMContentLoaded", loadGitHubActivity);

