import React from "react";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
import "./footer.css";
const footer = () => {
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          {(new Date().getFullYear())} - {"All Rights Reserved."}
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
