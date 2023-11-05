import React, { useState } from "react";
import "../App.css";
import SidebarData from "./SidebarData";
import DropDown from "./DropDown";

function Sidebar() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          if (val.title === "UserProfile") {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  window.location.pathname = val.link;
                  setOpenProfile(!openProfile);
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
                {openProfile && <DropDown />}
              </li>
            );
          } else {
            return (
              <li
                key={key}
                className="row"
                onClick={() => (window.location.pathname = val.link)}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            );
          }
        })}
      </ul>
      {openProfile && <DropDown />}
    </div>
  );
}

export default Sidebar;
