// import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import Books from './books';

export default combineReducers ({
    data : Books,
});