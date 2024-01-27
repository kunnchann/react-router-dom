import React, { useEffect } from "react";
import { BookListComponent, ServerErrorComponent } from "../components";
import useFetch from "../hook/useFetch";
import { SpinnerDotted } from "spinners-react";
import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/left-arrow.svg";

const BooksPage = () => {
  const { isLoading, data, errors } = useFetch("book");

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      {isLoading ? (
        <div className=" h-[500px] grid place-content-center">
          <SpinnerDotted
            size={100}
            thickness={180}
            speed={70}
            color="rgba(0, 0, 0, 1)"
          />
        </div>
      ) : (
        <>
          {errors ? (
            <>
              <ServerErrorComponent />
            </>
          ) : (
            <>
              <button
                onClick={goHome}
                className="w-[50px] block ms-6 duration-200"
              >
                <img src={leftArrow} alt="" />
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px]">
                {data.map((el) => (
                  <BookListComponent key={el.id} {...el} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BooksPage;
