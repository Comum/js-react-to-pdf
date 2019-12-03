import React from "react";

import Title from "../Title/Title";
import { USER_NAME } from "../../lib/constants";

import "./LateralMenu.css";

function LateralMenu() {
  return (
    <div className="lateral-menu">
      <Title title={USER_NAME} type="sub" />
    </div>
  );
}

export default LateralMenu;
