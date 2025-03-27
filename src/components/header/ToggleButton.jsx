import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ToggleButton() {
  return (
    <button
      id="menu_toggle"
      className="header__toggle"
      aria-label="navigation menu toggle"
    >
      {/* <i class="fa-solid fa-bars"></i> */}
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}
