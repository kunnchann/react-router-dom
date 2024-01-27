import React from "react";
import book from "../assets/book.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const viewAllBooks = () => {
    navigate("view-all-book");
  };

  return (
    <main className="max-w-[1300px] mx-auto p-5">
      <div className=" flex flex-col md:flex-row items-center">
        <img
          className="w-full md:w-1/2 2xl:w-[737px] order-1 "
          src={book}
          alt=""
        />
        <div className=" md:order-2 px-5 md:px-0 md:mb-14">
          <h1 className="text-5xl font-bold text-center md:text-left">
            Welcome to our <br /> book store
          </h1>
          <p className="text-xl text-center md:text-left my-5 md:my-[25px]">
            Explore our collection of books.
          </p>
          <button
            onClick={viewAllBooks}
            className="bg-black block mx-auto md:mx-0 hover:bg-gray-600 duration-200 text-white font-bold py-2 px-4 rounded"
          >
            View Books
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
