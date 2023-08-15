import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onFavoriteBooksList } from "../store/actions"

const ShowBook = ({ book }) => {
  const [isFav,setIsFav] = useState(false)
  const dispatch = useDispatch()
  // console.log("book", book);
   const handleTrim = (value, trimedIndex) => {
    if (value && value?.length > trimedIndex) {
      return value.slice(0, trimedIndex) + "...";
    } else {
      return value;
    }
  };
  return (
    Object.keys(book)?.length && (
      <div className="card mb-5 customHeight w-100" key={book.id}>
        <img
          className="border m-auto mt-3"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt=""
          width={150}
          height={150}
        />
        <div className="card-body pb-0">
          <h5 className="card-title">{handleTrim(book.volumeInfo.title, 40)}</h5>
          <p className="card-text">
            Published Date:{book.volumeInfo.publishedDate || "-"}
          </p>
          <p>Category: {book.volumeInfo.categories || "-"}</p>
        </div>
        <div className="d-flex p-3 justify-content-between align-items-center">
          <Link to={`/${book.id}`}>
            <button className="btn btn-warning">View Details</button>
          </Link>
         <div className="cursor-pointer" onClick={() => {
          setIsFav(!isFav)
          dispatch(onFavoriteBooksList(book))
         }}>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={isFav ? ' #0dcaf0' : 'black'}
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
         </div>
        </div>
      </div>
    )
  );
};

export default ShowBook;
