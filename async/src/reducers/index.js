import { FETCH_CATS, UPDATE_IMG, ERROR } from '../actions';

export const initialState = {
    isFetching: false,
    catImg: '',
    error: ''
}

export const catImgReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATS:
            return {
                ...state,
                isFetching: true,
                catImg:''
            }
        case UPDATE_IMG:
            return {
                ...state,
                isFetching: false,
                catImg: action.payload
            }
        case ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}