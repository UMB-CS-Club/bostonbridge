import React from "react";
import Contact from "./contact";
import Convener from "./convener";
import Coordinators from "./coordinators";
import Faqs from "./faqs";
import "./sponsors.css";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsors
          <img src="/images/rrr.png" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="https://media.discordapp.net/attachments/1197256108604145765/1202421292981293056/image_2.png?ex=65cd6518&is=65baf018&hm=fb124793e793354871f33b58b1132d4b8948b1cb30716b56d73dd9a523705487&=&format=webp&quality=lossless" alt="Paul English" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://paulenglish.com/" target="_blank">
                  {" "}
                  Paul <br />English{" "}
                </a>
              </h1>
            </div>{" "}
            {/* <LaunchLink className="link-launch-icon" /> */}
          </div>
          <div className="sponsors-border">
            <div>
              <img src="./oracle.png" alt="Oracle" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://paulenglish.com/" target="_blank">
                  {" "}
                  Oracle{" "}
                </a>
              </h1>
            </div>{" "}
            {/* <LaunchLink className="link-launch-icon" /> */}
          </div>
          <div className="sponsors-border">
            <div>
              <img src="https://media.discordapp.net/attachments/1197256108604145765/1202421293199130706/image_1.png?ex=65cd6518&is=65baf018&hm=379a23284ea688fa87828fb6e0eda7c052405e4b52bc720e4c4f64cacce300cc&=&format=webp&quality=lossless" alt="Tea Do" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.teadocafe.com/" target="_blank">
                  {" "}
                  Tea Do{" "}
                </a>
              </h1>
            </div>{" "}
            {/* <LaunchLink className="link-launch-icon" /> */}
          </div>
          <div className="sponsors-border">
            <div>
              <img src="https://media.discordapp.net/attachments/1197256108604145765/1202421291974402128/image_4.png?ex=65cd6517&is=65baf017&hm=54254ae0724d5d19efb5ea63507faaec2bf76e6d780395e2a018fec7839f09d0&=&format=webp&quality=lossless&width=1212&height=702" alt="Boston Venture Studio" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.bvs.net/" target="_blank">
                  {" "}
                  Boston Venture Studio{" "}
                </a>
              </h1>
            </div>{" "}
            {/* <LaunchLink className="link-launch-icon" /> */}
          </div>
          <div className="sponsors-border">
            <div>
              <img src="https://media.discordapp.net/attachments/1197256108604145765/1202421292503138344/image_3.png?ex=65cd6518&is=65baf018&hm=ce6d03c0c9be8996c0ef9bd00b79e15b359b32e6b66c56d778a1c8ec3f0a7cf5&=&format=webp&quality=lossless&width=1440&height=689" alt="UMass Boston" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.umb.edu/" target="_blank">
                  {" "}
                  UMass Boston{" "}
                </a>
              </h1>
            </div>{" "}
            {/* <LaunchLink className="link-launch-icon" /> */}
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
