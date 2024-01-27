import React from "react";
import notFound from "../assets/not-found.svg";
import { useNavigate } from "react-router-dom";

const PageNotFoundComponent = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="max-w-[1300px] mx-auto h-[600px] grid place-content-center">
      <img width={500} src={notFound} alt="404 Page Not Found" />
      <button
        onClick={goHome}
        className="bg-black block mx-auto hover:bg-gray-600 duration-200 text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default PageNotFoundComponent;
