import { useState, useEffect } from "react";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      setProgress(scrollPercent);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.bar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ScrollProgress;
