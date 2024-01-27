import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { SpinnerDotted } from "spinners-react";
import { ServerErrorComponent } from "../components";
import leftArrow from "../assets/left-arrow.svg";
import { useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, errors, data } = useFetch(`book/${id}`);

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[1300px] mx-auto flex">
      {isLoading ? (
        <>
          <SpinnerDotted
            className="mx-auto h-[500px]"
            size={100}
            thickness={180}
            speed={70}
            color="rgba(0, 0, 0, 1)"
          />
        </>
      ) : (
        <>
          {errors ? (
            <div className="w-screen h-[600px] flex justify-center">
              <ServerErrorComponent />
            </div>
          ) : (
            <>
              <div className=" w-full p-5 grid grid-cols-1  md:grid-cols-3 md:gap-[20px] md:gap-0">
                <div>
                  <img
                    className="w-[300px] lg:mx-auto rounded-lg mb-[20px] md:mb-0 md:mx-0 mx-auto"
                    src={data.image}
                    alt={`${data.image} photo`}
                  />
                </div>
                <div className="flex flex-col justify-center col-span-2 lg:px-[70px]">
                  <div className="flex flex-col gap-[20px] justify-between mb-8 ">
                    <h1 className=" font-semibold text-xl">
                      <span className="font-sans text-2xl">Title</span> -{" "}
                      <span className="p-1 bg-black text-white rounded-lg px-2 truncate">
                        {data.book}
                      </span>
                    </h1>
                    <h1 className=" font-semibold text-xl">
                      Author -{" "}
                      <span className="p-1 bg-black text-white rounded-lg px-2 truncate">
                        {data.author}
                      </span>
                    </h1>
                  </div>
                  <h1 className=" font-semibold text-xl leading-[33px] mb-[20px]">
                    <span className="text-2xl font-sans block mb-[20px]">
                      Description
                    </span>
                    {data.description}
                  </h1>
                  <button
                    onClick={goBackHandler}
                    className="w-[50px] block  duration-200"
                  >
                    <img src={leftArrow} alt="" />
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
