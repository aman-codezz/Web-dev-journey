
export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "GitHub token is missing"
    });
  }

  const query = `
    query {
      user(login: "aman-codezz") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      }
    );

    const result = await response.json();

    if (!response.ok || result.errors) {
      return res.status(response.status || 502).json({
        error: "GitHub GraphQL request failed",
        details: result.errors || result.message
      });
    }

    const calendar =
      result.data.user.contributionsCollection.contributionCalendar;

    const allDays = calendar.weeks.flatMap(
      week => week.contributionDays
    );

    const last7Days = allDays.slice(-7);

    return res.status(200).json({
      totalContributions: calendar.totalContributions,
      last7Days
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error while fetching GitHub data"
    });
  }
}
