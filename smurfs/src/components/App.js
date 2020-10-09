import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { fetchSmurf } from '../actions/actions'
import { addSmurf } from '../actions/actions'
import AddSmurf from "../actions/AddSmurf";
import SmurfList from './SmurfList'

//import "./App.css";


function App (props) {
   const { fetchSmurf, addSmurf } = props;
   const [url, setUrl] = useState('http://localhost:3333/smurfs');
   const [postUrl, setPostUrl] = useState('http://localhost:3333/smurfs')

   useEffect(() => {
    props.fetchSmurf(url)
   }, [fetchSmurf, url])

   useEffect(() => {
    props.addSmurf(postUrl)
    }, [addSmurf, postUrl])



    return (
      <div className="App">

        <SmurfList />
        <AddSmurf />
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      name: state.name
    }
  }


export default connect(mapStateToProps, {fetchSmurf})(App);
