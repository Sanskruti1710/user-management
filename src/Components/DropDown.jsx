import React from "react";
import "../App.css";

const Dropdown = () => {
  return (
    <div className="flex flex-col dropdown">
    <ul className="flex flex-col gap-4">
      <li>
        <a href="/logout">Logout</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
    </ul>
    </div>
  );
};

export default Dropdown;