import "./Pages.css";
import LeaderboardTable from "../components/Leaderboard/Leaderboard";

function Leaderboard() {
  const data = [
    {
      rank: 1,
      teamName: "TeamName",
      members:
        "Member 1,\n" +
        "Member 2,\n" +
        "Member 3",
      affiliation: "Example University",
      score: 0.622,
    },{
      rank: 2,
      teamName: "TeamName",
      members:
        "Member 1,\n" +
        "Member 2,\n" +
        "Member 3",
      affiliation: "Example University",
      score: 0.601,
    }
  ];

  const columns = [
    {
      label: "Rank",
      key: "rank",
      className: "col-rank",
    },
    {
      label: "Team Name",
      key: "teamName",
    },
    {
      label: "Team Members",
      key: "members",
      className: "multiline",
    },
    {
      label: "Team Affiliation",
      key: "affiliation",
      className: "multiline",
    },
    {
      label: "Final Score",
      key: "score",
      className: "col-score",
      render: (value) => value.toFixed(3),
    },
  ];

  return (
    <div className="page-container" id="top">
      <div className="page-content">
        <LeaderboardTable
          data={data}
          columns={columns}
        />
        <div className="note">
          <strong>NOTE:</strong> All scores (the larger the better) are 
          normalised using the ranking method described in the <a href="/Assessment">assessment</a> page.
        </div>
        <p className="back-to-top">
            <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
