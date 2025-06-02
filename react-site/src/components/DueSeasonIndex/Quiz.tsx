import React, { useState } from "react";
import { quizQuestions, calculateScore } from "../../utils/scoring";
import type { QuizQuestion } from "../../utils/scoring";

type Props = {
  onComplete: (
    answers: Record<string, string>,
    score: number,
    category: string
  ) => void;
  onBack: () => void;
};

export const Quiz: React.FC<Props> = ({ onComplete, onBack }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);

  const handleAnswer = (value: string) => {
    const q = quizQuestions[current];
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      const { score, category } = calculateScore({ ...answers, [q.id]: value });
      onComplete({ ...answers, [q.id]: value }, score, category);
    }
  };

  const q = quizQuestions[current];

  return (
    <div>
      <button onClick={onBack}>← Back</button>
      <h3>{q.question}</h3>
      {q.type === "yesno" && (
        <div>
          <button onClick={() => handleAnswer("yes")}>Yes</button>
          <button onClick={() => handleAnswer("no")}>No</button>
        </div>
      )}
      {q.type === "multiple" && (
        <div>
          {q.options?.map((opt: string) => (
            <button key={opt} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}
      <div>
        Question {current + 1} of {quizQuestions.length}
      </div>
    </div>
  );
};
