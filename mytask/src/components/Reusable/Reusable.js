import React from "react";
import "../../Assets/fonts/font.css"

export const Typography = (props) => {
  const { classname, fontfamily, fontstyle, fontweight, fontsize, Color,Padding,Margin,name,span,spancolor } =
    props;
  return (
    <div>
      <p
        className={classname}
        style={{
          fontFamily: { fontfamily },
          fontStyle: { fontstyle },
          fontWeight: { fontweight },
          fontSize: { fontsize },
          color: { Color },
          padding:{Padding},
          margin:{Margin}
        }}
      >{name} <span style={{color:{spancolor}}}>{span}</span></p>
    </div>
  );
};



