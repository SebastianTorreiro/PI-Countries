import React from 'react'
import { connect } from 'react-redux'
import './errorLoading.css'


function ErrorLoading({name}) {
    console.log(name)
  return (
    <div className='error-loading'><p>No se han encontrado resultados para {name}.. </p> </div>
  )
}


const mapStateToProps = (state)=>{
 return {
    name: state.nameSearch
 }
}


export default connect(mapStateToProps, {})(ErrorLoading)