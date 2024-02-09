import React, { useEffect } from "react";
import { set1 } from "./Details";
import Judge3 from "./Judge3";
import "./judges.css";
const judges = () => {
  useEffect(() => {
    document.title = "Judge Panel | Hack a Tank";
  }, []);


  return (
    <div className="parent-judges">
      <section className="bg-judges">

        <img src="/images/judgeP/bg.png" alt="hjhg" className="bg_img" />

        <div className="bg_img-overlay"></div>

      </section>
      <div className="title">
        <h1>judge panel</h1>
      </div>
      <section className="judges">
        <Judge3 mem={set1} />
        {/* <Judge3 mem = {set2} />
      <Judge3 mem = {set3} />
      <Judge3 mem = {set4} /> */}
      </section>
    </div>
  );
};

export default judges;
