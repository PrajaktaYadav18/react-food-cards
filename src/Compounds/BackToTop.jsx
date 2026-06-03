import React, { useState, useEffect } from "react";
import "./BackToTop.css"

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 200);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button className="top-btn" onClick={scrollTop}>
        ⬆
      </button>
    )
  );
}

export default BackToTop;