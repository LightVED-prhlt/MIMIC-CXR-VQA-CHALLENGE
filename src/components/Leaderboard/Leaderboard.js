import "./Leaderboard.css";

function Leaderboard({ data, columns}) {
  return (
    <div className="leaderboard-container">

      <table className="leaderboard-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.className}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {columns.map((col) => (
                <td key={col.key} className={col.className}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
