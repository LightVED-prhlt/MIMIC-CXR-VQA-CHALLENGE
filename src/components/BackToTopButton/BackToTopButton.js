import React from "react";
import "./BackToTopButton.css"; 

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    // 1. Try to find and scroll the content div (primary target)
    const contentDiv = document.querySelector(".page-content");
    if (contentDiv) {
      contentDiv.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 2. Also scroll the window (fallback target)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <p className="back-to-top">
      <button onClick={handleScrollToTop} className="back-to-top-link">
        Back to top ↑
      </button>
    </p>
  );
};

export default BackToTopButton;