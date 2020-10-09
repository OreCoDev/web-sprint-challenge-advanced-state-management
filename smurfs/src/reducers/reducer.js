import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from '../actions/actions'

const initialState = {
    name: '',
    age: '',
    height: '',
    id: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
            
            }
            default: return state;
    }
}
