import React from 'react';
import axios from 'axios';

class api extends React.Component {

   static fetchSearchResult = async searchValue => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=40`);

   static fetchSingleBook =  async bookID => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookID}`)

   static fetchBooksGeneralList =  async booksType => axios.get(`https://www.googleapis.com/books/v1/volumes?q=language,bussines&filter=free-ebooks&maxResults=20`)

};

export default api;