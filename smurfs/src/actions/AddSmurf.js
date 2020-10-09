export const ADD_SMURF = 'ADD_SMURF'



export function addSmurf(addSmurf) {
    console.log('action', addSmurf)
    return {
        type: ADD_SMURF,
        payload: addSmurf
    }
}
