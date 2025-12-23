import UpdatesTimeLine from "../components/UpdatesTimeLine/UpdatesTimeLine";
import "./Pages.css"
// import { Link } from "react-router-dom"; uncomment when used
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

function LatestNews() {
  const updates = [
    // {
    //   date: "14/11/2025",
    //   icon: "📚",
    //   title: "TUS-REC2024 Challenge Paper Update",
    //   content: (
    //     <>
    //       The TUS-REC2024 Challenge paper has been updated with a more
    //       comprehensive literature review and accompanying supplementary
    //       material. You can access the updated version here:{" "}
    //       <Link
    //         to="https://doi.org/10.48550/arXiv.2506.21765"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         https://doi.org/
    //       </Link>{" "}
    //       and the supplementary material here:{" "}
    //       <Link to="/supplementary.xlsx">supplementary.xlsx</Link>.
    //     </>
    //   ),
    // },
    // {
    //   date: "01/09/2025",
    //   icon: "🏆",
    //   title: "Leaderboard Finalised & Joint Challenge Paper",
    //   content: (
    //     <>
    //       The finalised <Link to="/leaderboard">leaderboard</Link> is now available.
    //       This challenge will remain open-ended, and we are planning to submit a
    //       challenge paper. Docker submissions made before 13 Oct 2025 will be
    //       considered for co-authorship in the challenge paper, based on
    //       performance.
    //     </>
    //   ),
    // },
    // {
    //   date: "07/07/2025",
    //   icon: "⬆️",
    //   title: "TUS-REC2025 Challenge Submission Phase Begins",
    //   content: (
    //     <>
    //       The TUS-REC2025 Challenge has entered the submission phase.
    //       Participants can now submit their Dockerized algorithms via this{" "}
    //       <Link to="/submission-form">form</Link> by following the{" "}
    //       <Link to="/submission-guideline">submission guideline</Link>. Additionally,
    //       the <Link to="/validation-dataset">validation dataset</Link> has been
    //       released for local evaluation.
    //     </>
    //   ),
    // },
    {
      date: "**/**/****",
      icon: "⬆️",
      title: "Comming soon!",
      content: (
        <>
          More news will be shared when the challenge is launched.
        </>
      ),
    },
    {
      date: "01/04/2026",
      icon: "🚀",
      title: "CXR-ORACLE Challenge will be Launched",
      content: (
        <>
          Registration is now open.
        </>
      ),
    }
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <UpdatesTimeLine updates={updates} />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default LatestNews;
