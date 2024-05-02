import React from "react";

const Description = (props: any) => {
  return (
    <div className="w-100 bg-customWhite flex-col flex items-center p-12">
        <p className="text-customBlack justify-center text-center">{props.text}</p>
    </div>
  );
};

export default Description;