import React from "react";

const Title = (props: any) => {
  return (
    <div className="relative w-100 h-[20rem] flex items-center justify-center" style={{backgroundImage: 'url(https://www.deltats.eu/wp-content/uploads/2019/12/facciata-deltats.jpg?id=9202)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-black opacity-40 bg-customBlack"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center w-[70rem]">
                <h1 className="text-5xl font-extrabold text-white">{props.title}</h1>
            </div>
        </div>
    </div>
  );
};

export default Title;