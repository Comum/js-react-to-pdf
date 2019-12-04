import React from "react";

import PersonalInfoItem from "../PersonalInfoItem/PersonalInfoItem";
import Title from "../Title/Title";
import { INFORMATION } from "../../lib/constants";

import "./PersonalInfoWrapper.css";

const getContactsList = details => {
  if (!details.length) {
    return <div />;
  }

  const detailsItems = details.map(detail => (
    <PersonalInfoItem
      key={detail.id}
      value={detail.value}
      icon={detail.icon}
      isLink={detail.isLink}
    />
  ));

  return <ul className="personal-info-list">{detailsItems}</ul>;
};

function PersonalInfoWrapper() {
  const contactsList = getContactsList(INFORMATION);
  return (
    <div className="personal-info-wraper">
      <Title title="Contacts" type="category" />
      {contactsList}
    </div>
  );
}

export default PersonalInfoWrapper;
