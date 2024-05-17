import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firstPage from "@assets/images/Top/start.png";

function RedPage() {
  const [fade, setFade] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        navigation("/En");
      }, 1000);
    }, 3000);
  }, []);

  return (
    <div className={`first-page ${fade ? "fade-out" : ""}`}>
      <img src={firstPage} style={{ width: "100%" }} />
    </div>
  );
}

export default RedPage;
