import React from "react";

type Props = {
  score: number;
  category: string;
  onNext: () => void;
};

export const ScoreSummary: React.FC<Props> = ({ score, category, onNext }) => (
  <div>
    <h2>
      Your Due Season Index Score: {score} — {category}
    </h2>
    <p>
      <strong>Strengths:</strong> [list top signals found]
      <br />
      <strong>Opportunities:</strong> [list most important missing signals]
      <br />
      <strong>Next steps:</strong> Consider actionable improvements. For a full
      AI SEO overhaul, book a call with Due Season Digital.
    </p>
    <button onClick={onNext}>Get My Full Report</button>
  </div>
);
