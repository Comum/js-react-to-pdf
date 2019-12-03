import React from "react";

import Description from "../Description/Description";
import Title from "../Title/Title";
import { USER_NAME } from "../../lib/constants";

import "./LateralMenu.css";

function LateralMenu() {
  return (
    <div className="lateral-menu">
      <Title title={USER_NAME} type="sub" />
	  <Description />
    </div>
  );
}

export default LateralMenu;
