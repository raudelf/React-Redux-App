import axios from 'axios';

// Type Variables
export const FETCH_CATS = 'FETCH_CATS';
export const UPDATE_IMG = 'UPDATE_IMG';
export const ERROR = 'ERROR';

export const getCats = () => dispatch => {
    dispatch({ type: FETCH_CATS});
    setTimeout(() => {
        axios
            .get('https://aws.random.cat/meow')
            .then(res => {
                console.log('RF: Axios > getCats > fetch: ', res);
                dispatch({ type: UPDATE_IMG, payload: res.data.file})
            })
            .catch(err => {
                console.log('RF: Axios > getCats > Error: ', err)
                dispatch({ type: ERROR, payload: 'There was an issue retrieving the kitty :('})
            })
    }, 2000)
}