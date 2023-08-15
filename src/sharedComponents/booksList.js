import React, { useEffect } from "react";
import { onGetBooksGeneralList } from "../store/actions/";
import { useDispatch, useSelector } from "react-redux";
import ShowBook from "./showBook";
import SearchBar from "./searchBar";

const BooksList = () => {
  const dispatch = useDispatch();
  const {
    data: { searchResult },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onGetBooksGeneralList("business+subject:juvenile+fiction"));
  }, []);

  // console.log("BooksList", searchResult);
  return (
    <>
      <SearchBar />
      <div className="container row m-auto py-4">
        <h4 className="text-info p-2 bg-light">Free e-books</h4>
        {searchResult && searchResult.length > 0
          ? searchResult.map((book) => (
              <div className="col-md-4 col-lg-3 col">
                <ShowBook book={book} />
              </div>
            ))
          : "Loading....."}
      </div>
    </>
  );
};

export default BooksList;
