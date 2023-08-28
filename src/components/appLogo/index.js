import React from "react";
import "./css/index.scss";

const AppLogo = (props) => {
  return (
    <div className={`logo-content ${props.size || ""}`}>
      <div className="spa-ic">S</div>
      <div className="spa-text">CLINIC</div>
    </div>
  );
};

export default React.memo(AppLogo);
