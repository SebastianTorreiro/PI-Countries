import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import "./start.css"
import {getAllCountries, getContinents, getActivities, errorForzado, setPageInState } from '../../Actions/actionCreator.js'


function Start({getAllCountries}) {


  


  
  return (
    <div className='container-start'>
        <Link to="/countries">
          <button className='start-button'> Go Countries! </button>
        </Link>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return 
}

export default connect(mapStateToProps,{getAllCountries})(Start)
