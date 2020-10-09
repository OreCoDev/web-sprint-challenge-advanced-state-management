import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, ADD_SMURF } from '../actions/actions'

const initialState = {
 isLoading: false,
 smurfs: [],
 error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true
            
            }
            case FETCH_SMURF_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    smurfs: action.payload,
                    error: ''
                }
                case ADD_SMURF:
                    return {
                        ...state,
                        smurfs: action.payload
                    }
            default: return state;
    }
}
