import { call, put, takeLatest } from "redux-saga/effects";
import api from "../apis/api";
import {
  FETCH_SEARCH_RESULT_SAGA,
  SINGLE_BOOK_SAGA,
  GET_BOOKS_GENERAL_LIST_SAGA,
  FETCH_SEARCH_RESULT,
  SINGLE_BOOK,
  GET_BOOKS_GENERAL_LIST,
} from "../actions/types";

function* FetchSearchResult(action) {
  const { searchValue } = action;
  try {
    const response = yield call(api.fetchSearchResult, searchValue);
    yield put({ type: FETCH_SEARCH_RESULT, payload: response.data.items });
  } catch (err) {
    console.log(err);
  }
}

function* GetBooksGeneralList(action) {
  const { booksType } = action;
  try {
    const response = yield call(api.fetchBooksGeneralList, booksType);
    yield put({ type: GET_BOOKS_GENERAL_LIST, payload: response.data.items });
  } catch (err) {
    console.log(err);
  }
}

function* FetchSingleBook(action) {
  const { BOOKID } = action;
  try {
    const response = yield call(api.fetchSingleBook, BOOKID);
    yield put({ type: SINGLE_BOOK, payload: response.data });
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_SEARCH_RESULT_SAGA, FetchSearchResult);
  yield takeLatest(GET_BOOKS_GENERAL_LIST_SAGA, GetBooksGeneralList);
  yield takeLatest(SINGLE_BOOK_SAGA, FetchSingleBook);
}
