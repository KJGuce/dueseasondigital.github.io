import React, { useState } from "react";

type Props = {
  onSubmit: () => void;
  onBack: () => void;
};

export const LeadForm: React.FC<Props> = ({ onSubmit, onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <button type="button" onClick={onBack}>
        ← Back
      </button>
      <h3>Get Your Full Report</h3>
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        required
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Send My Report</button>
    </form>
  );
};
