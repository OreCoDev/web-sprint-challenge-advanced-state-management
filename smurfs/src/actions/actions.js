import axios from 'axios'


export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurf = (url) => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START})
    axios
    .get(url)
    .then((res) => {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch ((err) => console.log(err))
  }

  // export const addSmurf = (postUrl) => (dispatch) => {
  //   dispatch({ type: ADD_SMURF})
  //   axios
  //   .post('')
  //   .then((res) => {
  //     dispatch({type: ADD_SMURF, payload: res.data})
  // })
  // .catch ((err) => console.log(err))
  // }
  

export const addSmurf = newSmurf => {
  return dispatch => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then ((res) => {
      dispatch({type: ADD_SMURF, payload: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

