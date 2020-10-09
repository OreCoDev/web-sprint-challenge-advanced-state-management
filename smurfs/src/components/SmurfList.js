import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {addSmurf} from '../actions/AddSmurf'
import Smurf from './Smurf'
import {fetchSmurf} from '../actions/actions'



const SmurfList = props => {
  useEffect (() => {
    props.fetchSmurf()
  }, [])

  return (
    <div>  <h1>Smurf List</h1>
    {props.smurfs.length > 0 && props.smurfs.map(smurf => (
      <Smurf key={smurf.id} smurf={smurf}/>
    ))}
      </div>
  )

  
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error

  }
}
export default connect (mapStateToProps, {fetchSmurf})(SmurfList)