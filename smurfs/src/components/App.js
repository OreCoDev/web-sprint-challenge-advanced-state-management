import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { fetchSmurf } from '../actions/actions'
import SmurfList from './SmurfList'

//import "./App.css";


function App (props) {
   const { fetchSmurf } = props;
   const [url, setUrl] = useState('http://localhost:3333/smurfs');

   useEffect(() => {
    props.fetchSmurf(url)
   }, [fetchSmurf, url])




    return (
      <div className="App">

        <SmurfList />
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      name: state.name
    }
  }


export default connect(mapStateToProps, {fetchSmurf})(App);
