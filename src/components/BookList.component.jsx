import React from "react";
import { useNavigate } from "react-router-dom";

const BookListComponent = (props) => {
  const navigate = useNavigate();
  const viewDetail = () => {
    navigate(`/detail-book/${props.id}`);
  };

  return (
    <div className="max-w-[1300px] mx-auto ">
      <div className="p-5 w-[250px]">
        <img
          className="h-[250px] block mb-2 object-cover"
          src={props.image}
          alt={`${props.book} image`}
        />
        <h1 className="truncate font-bold">{"Title - " + props.book}</h1>
        <h2 className="my-2 font-bold truncate">{"Auth - " + props.author}</h2>
        <button
          onClick={viewDetail}
          className="bg-black hover:bg-gray-600 duration-200 text-white font-bold py-2 px-4 rounded"
        >
          View Detail
        </button>
      </div>
    </div>
  );
};

export default BookListComponent;
