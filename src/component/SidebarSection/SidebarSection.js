import React from "react";

export const SidebarSection = ({ isOpenSide, toggle }) => {
  return (
    <div className="sidebar-container" isOpenSide={isOpenSide} toggle={toggle}>
      <box-icon name="x" onClick={toggle}></box-icon>
    </div>
  );
};
