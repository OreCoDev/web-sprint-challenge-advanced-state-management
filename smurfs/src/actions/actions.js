import axios from 'axios'


export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const fetchSmurf = (url) => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START})
    axios
    .get(url)
    .then((res) => {
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch ((err) => console.log(err))



const postNewSmurf = newSmurf => {
    axios
    .post('', newSmurf)
    .then(res => {
      setSmurf([...state, res.data])
    })
    .catch (err => {
      console.log(err)
    })

}
}