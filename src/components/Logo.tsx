import React from "react";
import Logo from "../assets/logo.svg";

const Careers = () => {
  return (
    <div className="flex gap-2 py-2 px-6 text-base max-w-max rounded-full overflow-hidden">
      <div className="flex gap-2 py-2 px-6 rounded-full w-full justify-center items-center">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Careers;
