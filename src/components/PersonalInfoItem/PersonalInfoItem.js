import React from "react";

import "./PersonalInfoItem.css";

const getValueElement = (value, isLink) => {
  if (isLink) {
    return (
      <a className="is-link" href={value}>
        {value}
      </a>
    );
  }

  return <span>{value}</span>;
};

function PersonalInfoItem(props) {
  const { value, icon, isLink } = props;
  const valueElement = getValueElement(value, isLink);
  return (
    <li className="personal-info-item">
      <div className="personal-info-item--icon">{icon}</div>
      <div className="personal-info-item--value">{valueElement}</div>
    </li>
  );
}

export default PersonalInfoItem;
