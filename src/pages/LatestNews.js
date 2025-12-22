import UpdatesTimeLine from "../components/UpdatesTimeLine/UpdatesTimeLine";
import "./Pages.css"

function LatestNews() {
  const updates = [
    {
      date: "14/11/2025",
      icon: "📚",
      title: "TUS-REC2024 Challenge Paper Update",
      content: (
        <>
          The TUS-REC2024 Challenge paper has been updated with a more
          comprehensive literature review and accompanying supplementary
          material. You can access the updated version here:{" "}
          <a
            href="https://doi.org/10.48550/arXiv.2506.21765"
            target="_blank"
            rel="noreferrer"
          >
            https://doi.org/
          </a>{" "}
          and the supplementary material here:{" "}
          <a href="/supplementary.xlsx">supplementary.xlsx</a>.
        </>
      ),
    },
    {
      date: "01/09/2025",
      icon: "🏆",
      title: "Leaderboard Finalised & Joint Challenge Paper",
      content: (
        <>
          The finalised <a href="/leaderboard">leaderboard</a> is now available.
          This challenge will remain open-ended, and we are planning to submit a
          challenge paper. Docker submissions made before 13 Oct 2025 will be
          considered for co-authorship in the challenge paper, based on
          performance.
        </>
      ),
    },
    {
      date: "07/07/2025",
      icon: "⬆️",
      title: "TUS-REC2025 Challenge Submission Phase Begins",
      content: (
        <>
          The TUS-REC2025 Challenge has entered the submission phase.
          Participants can now submit their Dockerized algorithms via this{" "}
          <a href="/submission-form">form</a> by following the{" "}
          <a href="/submission-guideline">submission guideline</a>. Additionally,
          the <a href="/validation-dataset">validation dataset</a> has been
          released for local evaluation.
        </>
      ),
    },
  ];

  return (
    <div className="page-container">
      <UpdatesTimeLine updates={updates} />
    </div>
  );
}

export default LatestNews;
