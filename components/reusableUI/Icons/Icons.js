import React from "react";
import Airplane from "./airplane";
import Ship from "./ship";
import Truck from "./truck";
import International from "./internationalTransport";
function icons({ icon, customClasses }) {
  let iconElement = null;

  switch (icon) {
    case "airplane":
      iconElement = <Airplane />;
      break;
    case "ship":
      iconElement = <Ship />;
      break;
    case "truck":
      iconElement = <Truck />;
      break;
    case "international":
      iconElement = <International />;
      break;

    default:
      break;
  }

  return <div className={customClasses}>{iconElement}</div>;
}

export default icons;
