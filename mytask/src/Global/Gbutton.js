import React from "react";

export const Gbutton = (props) => {
    const {onClickhandler,btnclass,btnlabel}= props
  return (
    <div>
      <button
        onClick={onClickhandler}
        className={btnclass}
      >
        {btnlabel}
      </button>
    </div>
  );
};
