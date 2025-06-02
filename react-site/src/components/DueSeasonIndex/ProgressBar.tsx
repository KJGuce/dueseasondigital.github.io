import React from "react";

type Props = {
  steps: string[];
};

export const ProgressBar: React.FC<Props> = ({ steps }) => (
  <div style={{ margin: "2em 0" }}>
    <div style={{ marginBottom: "1em" }}>Analyzing your business…</div>
    <ul>
      {steps.map((step, i) => (
        <li key={i} style={{ opacity: i === 0 ? 1 : 0.5 }}>
          {step}
        </li>
      ))}
    </ul>
    <div
      style={{
        width: "100%",
        height: 8,
        background: "#E9E3D3",
        borderRadius: 4,
        marginTop: 16,
      }}
    >
      <div
        style={{
          width: "40%",
          height: "100%",
          background: "#60A561",
          borderRadius: 4,
          transition: "width 1s",
        }}
      />
    </div>
  </div>
);
