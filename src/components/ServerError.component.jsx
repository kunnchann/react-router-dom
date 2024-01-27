import React from "react";
import serverError from "../assets/server-error.svg";
import { useNavigate } from "react-router-dom";

const ServerErrorComponent = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <img className="w-screen h-[500px]" src={serverError} alt="" />
      <button
        onClick={goHome}
        className="bg-black block mx-auto hover:bg-gray-600 duration-200 text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ServerErrorComponent;
