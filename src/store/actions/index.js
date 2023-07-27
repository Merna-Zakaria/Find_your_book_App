import {
    FETCH_SEARCH_RESULT_SAGA,
    SINGLE_BOOK,
    GET_BOOKS_GENERAL_LIST_SAGA,
} from './types';


export const onFetchSearchResult = (searchValue) => ({ type : FETCH_SEARCH_RESULT_SAGA , searchValue });

export const onFetchSingleBook = (BOOKID) => ({ type: SINGLE_BOOK , BOOKID});

export const onGetBooksGeneralList = (booksType) => ({ type: GET_BOOKS_GENERAL_LIST_SAGA , booksType});
