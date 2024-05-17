import React, { useEffect, useRef } from "react";
import howToWork from "@assets/images/Top/howTowork.png";

const ParallaxComponent = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    alert("afekefw");
    const handleScroll = () => {
      alert("afekefw");
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <img
        src={howToWork}
        height={100}
        ref={parallaxRef}
        className="parallax-background"
      />
    </div>
  );
};

export default ParallaxComponent;
