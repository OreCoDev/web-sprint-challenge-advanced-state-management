import React from 'react'
import { connect } from 'react-redux'
import {addSmurf} from '../actions/AddSmurf'


class SmurfList extends React.Component  {
state = {
        name: '',
        age:'',
    height: '' ,
   }


 handleChanges = e => {
    this.setState({addSmurf: e.target.value})
}
 addSmurf = e => {
     e.preventDefault()
     this.props.addSmurf(this.state.addSmurf)
 }
render() {
 return (
     <div>
         <input 
         type="text"
         value={this.state.addSmurf}
         onChange={this.handleChanges}
         placeholder="Add new smurf"
         />
     </div>
 )
}
}
const mapStateToProps = (state) => {
    return {
      name: state.name
    }
  }


export default connect(mapStateToProps, {addSmurf})(SmurfList);