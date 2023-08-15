import {
    FETCH_SEARCH_RESULT_SAGA,
    SINGLE_BOOK,
    GET_BOOKS_GENERAL_LIST_SAGA,
    FAVORITE_BOOKS_LIST,
} from './types';


export const onFetchSearchResult = (searchValue) => ({ type : FETCH_SEARCH_RESULT_SAGA , searchValue });

export const onFetchSingleBook = (BOOKID) => ({ type: SINGLE_BOOK , BOOKID});

export const onGetBooksGeneralList = (booksType) => ({ type: GET_BOOKS_GENERAL_LIST_SAGA , booksType});

export const onFavoriteBooksList = (payload) => ({ type: FAVORITE_BOOKS_LIST, payload });

