import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions/actions'

const initialValues = {
    name: '',
    age: '',
    height: '',
}

const AddSmurf = props => {
    const [values, setValues] = useState(initialValues)
    
    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf(values)
        setValues(initialValues)
        console.log(props.state)
    }
    const handleChanges = e => {
        setValues({ ...values,
        [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text"
            name='name'
            value={values.name}
            onChange={handleChanges}
            />
               <label>Age: </label>
            <input type="text"
            name='Age'
            value={values.age}
            onChange={handleChanges}
            />
               <label>Height: </label>
            <input type="text"
            name='Height'
            value={values.height}
            onChange={handleChanges}
            />
<button>Add Smurf</button>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}
export default connect(mapStateToProps, {addSmurf})(AddSmurf)