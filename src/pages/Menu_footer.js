import React from "react";
import "../pages/css/Menu_footer_stl.css";

const Menu_footer = ({ onClose }) => {
  return (
    <div className="popup-menu">
      <ul>
      </ul>
      <button onClick={onClose} className="btn_close">Close</button>
    </div>
  );
};

export default Menu_footer;
