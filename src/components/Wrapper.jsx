import React from "react";

function Wrapper({ children }) {
  return (
    <div className="shadow-[0_0_15px_rgba(0,0,0,0.130)] p-4 flex flex-col justify-center items-center rounded-lg gap-4">
      {children}
    </div>
  );
}

export default Wrapper;
