export type QuizQuestion = {
  id: string;
  question: string;
  type: "yesno" | "multiple";
  options?: string[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "schema",
    question: "Does your website use schema.org structured data?",
    type: "yesno",
  },
  {
    id: "reviews",
    question: "Do you have recent 5-star reviews on Google or Yelp?",
    type: "yesno",
  },
  {
    id: "content",
    question: "How often do you update your website content?",
    type: "multiple",
    options: ["Weekly", "Monthly", "Rarely", "Never"],
  },
  {
    id: "social",
    question: "Is your business active on social media?",
    type: "yesno",
  },
  {
    id: "gmb",
    question: "Is your Google Business Profile fully filled out?",
    type: "yesno",
  },
];

export function calculateScore(answers: Record<string, string>): {
  score: number;
  category: string;
} {
  let score = 0;
  if (answers["schema"] === "yes") score += 20;
  if (answers["reviews"] === "yes") score += 20;
  if (answers["content"] === "Weekly") score += 20;
  else if (answers["content"] === "Monthly") score += 10;
  if (answers["social"] === "yes") score += 20;
  if (answers["gmb"] === "yes") score += 20;

  let category = "Needs Work";
  if (score >= 80) category = "Excellent";
  else if (score >= 60) category = "Good";
  else if (score >= 40) category = "Fair";

  return { score, category };
}
