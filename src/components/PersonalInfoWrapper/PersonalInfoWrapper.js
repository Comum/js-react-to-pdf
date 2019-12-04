import React from "react";

import Title from "../Title/Title";
import { INFORMATION } from "../../lib/constants";

import "./PersonalInfoWrapper.css";

const getContactsList = details => {
  if (!details.length) {
    return <div />;
  }

  const detailsItems = details.map(detail => (
    <li key={detail.id}>{detail.value}</li>
  ));

  return <ul>{detailsItems}</ul>;
};

function PersonalInfoWrapper() {
  const contactsList = getContactsList(INFORMATION);
  return (
    <div>
      <Title title="Contacts" type="category" />
      {contactsList}
    </div>
  );
}

export default PersonalInfoWrapper;
