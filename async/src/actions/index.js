import axios from 'axios';

// Type Variables
export const FETCH_CATS = 'FETCH_CATS';
export const UPDATE_IMG = 'UPDATE_IMG';

export const getCats = () => dispatch => {
    dispatch({ type: FETCH_CATS});
    setTimeout(() => {
        axios
            .get('https://aws.random.cat/meow')
            .then(res => {
                console.log('RF: Axios > catFetch: ', res);
                dispatch({ type: UPDATE_IMG, payload: res.data})
            })
    }, 2000)
}