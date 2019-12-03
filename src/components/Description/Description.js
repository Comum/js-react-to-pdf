import React from "react";

import "./Description.css";

const DESCRIPTION =
  "Hello, my name is Miguel and my objective in life is to be happy. I started my professional career as an" +
  "IT Consultant, having worked in several fields of the area. I try to maintain a professional attitude, with an" +
  "easy-going and friendly mind-set.";

function Description() {
  return <div className="description-content">{DESCRIPTION}</div>;
}

export default Description;
