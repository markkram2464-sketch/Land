import React, { useState } from "react";
import QuizSection from "../components/QuizSection";
import ArticleSection from "../components/ArticleSection";

const HomePage = () => {
  const [showArticle, setShowArticle] = useState(false);

  const handleQuizComplete = () => {
    setShowArticle(true);
    // Smooth scroll to article
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="homepage-container">
      {!showArticle ? (
        <QuizSection onComplete={handleQuizComplete} />
      ) : (
        <ArticleSection />
      )}
    </div>
  );
};

export default HomePage;