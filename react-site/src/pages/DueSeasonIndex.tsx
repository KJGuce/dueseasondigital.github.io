import { useState } from "react";
import styles from "./DueSeasonIndex.module.css";
import { Quiz } from "../components/DueSeasonIndex/Quiz";
import { UrlAnalysis } from "../components/DueSeasonIndex/UrlAnalysis";
import { ProgressBar } from "../components/DueSeasonIndex/ProgressBar";
import { ScoreSummary } from "../components/DueSeasonIndex/ScoreSummary";
import { LeadForm } from "../components/DueSeasonIndex/LeadForm";
import { Confirmation } from "../components/DueSeasonIndex/Confirmation";
import logo from "../assets/logo-placeholder.svg";

type Step =
  | "choose"
  | "url"
  | "quiz"
  | "progress"
  | "score"
  | "lead"
  | "confirmation";

export default function DueSeasonIndexPage() {
  const [step, setStep] = useState<Step>("choose");
  const [score, setScore] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  // Simulate analysis and scoring
  const handleUrlAnalysis = async (url: string) => {
    setStep("progress");
    try {
      const res = await fetch("http://localhost:4000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setScore(data.score);
      // Simple category logic based on score
      let cat = "";
      if (data.score >= 80) cat = "Excellent";
      else if (data.score >= 60) cat = "Good";
      else if (data.score >= 40) cat = "Fair";
      else cat = "Needs Improvement";
      setCategory(cat);
    } catch (err) {
      setScore(null);
      setCategory(null);
      alert("Error analyzing site. Please try again.");
    }
    setStep("score");
  };

  const handleQuizComplete = (
    _answers: Record<string, string>,
    score: number,
    category: string
  ) => {
    setScore(score);
    setCategory(category);
    setStep("score");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Due Season Digital Logo" className={styles.logo} />
        <h1>Due Season Index</h1>
        <p>
          Measure how easily your business can be found and recommended by
          AI-powered search and large language models.
        </p>
      </header>
      <main>
        {step === "choose" && (
          <div className={styles.choice}>
            <button onClick={() => setStep("url")}>Analyze My Website</button>
            <span>or</span>
            <button onClick={() => setStep("quiz")}>Take the Quiz</button>
          </div>
        )}
        {step === "url" && (
          <UrlAnalysis
            onAnalyze={handleUrlAnalysis}
            onBack={() => setStep("choose")}
          />
        )}
        {step === "progress" && (
          <ProgressBar
            steps={[
              "Checking Schema Markup",
              "Analyzing Reviews",
              "Checking NAP",
              "Analyzing Content",
            ]}
          />
        )}
        {step === "quiz" && (
          <Quiz
            onComplete={handleQuizComplete}
            onBack={() => setStep("choose")}
          />
        )}
        {step === "score" && score !== null && category && (
          <ScoreSummary
            score={score}
            category={category}
            onNext={() => setStep("lead")}
          />
        )}
        {step === "lead" && (
          <LeadForm
            onSubmit={() => setStep("confirmation")}
            onBack={() => setStep("score")}
          />
        )}
        {step === "confirmation" && <Confirmation />}
      </main>
    </div>
  );
}
