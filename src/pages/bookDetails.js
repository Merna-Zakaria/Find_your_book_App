import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { onFetchSingleBook} from "../store/actions"

const BookDetails = () =>  {
    const { bookId } = useParams();
    const dispatch = useDispatch()

    const {
      data: { singleBook },
    } = useSelector((state) => state);

    useEffect(() => {
    dispatch(onFetchSingleBook(bookId))
    }, [])

    return (
      <div className="row mx-5">
      <div className="col-md-4 col-12 mb-5">
        <img src={singleBook?.volumeInfo?.imageLinks?.medium} alt="logo" width={200} />
      </div>
      <div className="col-md-8 col-12 d-flex align-items-center">
        <div>
          <p>
            <span className="lightText px-2">Book Title:</span>{" "}
            <span>{singleBook?.volumeInfo?.title}</span>
          </p>
          <p>
            <span className="lightText px-2">Publisher:</span>{" "}
            <span>{singleBook?.volumeInfo?.publisher}</span>
          </p>
          <p>
            <span className="lightText px-2">Language:</span>{" "}
            <span>{singleBook?.volumeInfo?.language}</span>
          </p>
          <p>
            <span className="lightText px-2">Web Reader Link:</span>{" "}
            <a href={singleBook?.accessInfo?.webReaderLink} className="logoutBtn">{singleBook?.accessInfo?.webReaderLink}</a>
          </p>
          <p>
            <span className="lightText px-2">Buy Link:</span>{" "}
            <a href={singleBook?.saleInfo?.buyLink} className="logoutBtn">{singleBook?.saleInfo?.buyLink}</a>
          </p>
          <p>
            <span className="lightText px-2">Preview Link:</span>{" "}
            <a href={singleBook?.volumInfo?.previewLink} className="logoutBtn">{singleBook?.saleInfo?.buyLink}</a>
          </p>
        </div>
      </div>
    </div>
    );
  
}

export default BookDetails;