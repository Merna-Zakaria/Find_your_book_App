import React from "react";
import { Link } from "react-router-dom";

const ShowBook = ({ book }) => {
  console.log("book", book);
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
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">
            Published Date:{book.volumeInfo.publishedDate || "-"}
          </p>
          <p>Category: {book.volumeInfo.categories || "-"}</p>
        </div>
        <div className="d-flex p-3 justify-content-between align-items-center">
          <Link to={`/${book.id}`}>
            <button className="btn btn-warning">View Details</button>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
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
    )
  );
};

export default ShowBook;
