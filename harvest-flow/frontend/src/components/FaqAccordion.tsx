import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { wrap } from "module";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e8eff5",
  border: "1px solid black",
  borderRadius: "0px",
}));

export type accordionProp = {
  title?: String;
  content?: String;
};

export type FaqAccordionProp = {
  acc?: accordionProp[];
};

const FaqAccordion: React.FC<FaqAccordionProp> = ({ acc }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {acc.map((item, index) => {
        return (
          <div key={index}>
            <Grid container>
              <Grid
                item
                xs={2}
                className={`${activeIndex === index ? "accordionNum" : ""}`}
                style={{ border: "1px solid #000", padding: "20px" }}
              >
                <p>Q{index + 1}</p>
              </Grid>
              <Grid
                item
                xs={10}
                style={{ border: "1px solid #000" }}
                key={index}
              >
                <button
                  className={`accordion ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                </button>
                <div
                  className="panel"
                  style={{ maxHeight: activeIndex === index ? "unset" : 0 }}
                >
                  <p style={{ padding: "20px" }}>{item.content}</p>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
