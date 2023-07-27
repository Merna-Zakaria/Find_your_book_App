import {
  SINGLE_BOOK,
  FETCH_SEARCH_RESULT,
  GET_BOOKS_GENERAL_LIST,
} from "../actions/types";

const Books = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case GET_BOOKS_GENERAL_LIST:
      return { ...state, searchResult: action.payload };
    case SINGLE_BOOK:
      return { ...state, singleBook: action.payload };
    default:
      return state;
  }
};

export default Books;