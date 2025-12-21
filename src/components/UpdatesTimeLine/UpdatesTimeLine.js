import "./UpdatesTimeLine.css";

export default function UpdatesTimeLine({ updates = [] }) {
  return (
    <div className="timeline">
      {updates.map((item, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === updates.length - 1;

        return (
          <div className="timeline-item" key={idx}>
            <div className="timeline-date">{item.date}</div>

            <div
              className={`timeline-marker
                ${isFirst ? "timeline-marker-first" : ""}
                ${isLast ? "timeline-marker-last" : ""}
              `}
            >
              <span className="timeline-icon">{item.icon}</span>
            </div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
