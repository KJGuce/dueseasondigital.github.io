import React, { useState } from "react";

type Props = {
  onAnalyze: (url: string) => void;
  onBack: () => void;
};

export const UrlAnalysis: React.FC<Props> = ({ onAnalyze, onBack }) => {
  const [url, setUrl] = useState("");

  return (
    <div>
      <button onClick={onBack}>← Back</button>
      <h3>Enter your business website URL</h3>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://yourbusiness.com"
        style={{ width: "100%", padding: "0.5em", marginBottom: "1em" }}
      />
      <button onClick={() => onAnalyze(url)} disabled={!url}>
        Analyze
      </button>
    </div>
  );
};
