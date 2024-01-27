import React, { useEffect, useState } from "react";
import { GetAllBook } from "../service/book.service";

const useFetch = (endpoint) => {
  const [state, setState] = useState({
    isLoading: true,
    errors: false,
    data: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllBook(endpoint);
        setState(() => {
          return {
            errors: null,
            isLoading: false,
            data: response,
          };
        });
      } catch (error) {
        setState(() => {
          return {
            errors: error.message,
            isLoading: false,
            data: null,
          };
        });
      }
    })();
  }, []);
  return state;
};

export default useFetch;
