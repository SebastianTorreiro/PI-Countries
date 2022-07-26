import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {useParams, Link, useNavigate} from 'react-router-dom'
import {getCountryDetail } from '../../Actions/actionCreator.js'
import './countryDetail.css'

function CountryDetail({getCountryDetail, p, page, setPage}) {


  const {id} = useParams()
  useEffect(()=>{
   getCountryDetail(id)
    return setPage(page)
  },[id])

  let history = useNavigate()
//   console.log(p.activities)

const returnHome = () =>{
    history(-1)

}

  return (  
    <div className='containerr'>
            <div className='titles'>
               <h2>Flag:</h2>
                <h2>Details:</h2>
                <h2>Activities:</h2>
            </div>
        <div className='container-details-all'>

            <div className='image-country'>
                <img src={p.img} alt="" />
            </div>

            <div className="container-details">
                <div className='country-name'>
                    <label>Name:</label>
                    <h4>{p.name}</h4>
                </div>

                <div className='country-area'>
                    <label>area:</label>
                    <h4>{p.area}</h4>
                </div>

                <div className='country-population'>
                    <label>population:</label>
                    <h4>{`${p.population} habitants`}</h4>
                </div>

                <div className='country-capital'> 
                    <label>capital:</label>
                    <h4>{p.capital}</h4>
                </div>

                <div className='country-subregion'>
                    <label>subregion:</label>
                    <h4>{p.subregion}</h4>
                </div>

                <div className='country-continents'>
                    <label>continents:</label>
                    <h4>{p.continents}</h4>
                </div>
            </div>

            <div className='container-activities'>
                {p.activities && p.activities.length ?
                        p.activities.map((a) =>(
                            <div className='activities'>
                                <div className='activite-name'>
                                    <label>Name:</label>
                                    <h4>{a.name}</h4>
                                </div>
                                <div className='activite-duration'>
                                    <label>Duration:</label>
                                    <h4>{a.duration}</h4>
                                </div>
                                <div className='activite-difficulty'>
                                    <label>Difficulty:</label>
                                    <h4>{a.difficulty}</h4>
                                </div>
                                <div className='activite-season'>
                                    <label>Season:</label>
                                    <h4>{a.season}</h4>
                                </div>
                            </div>
                        ))
                :   (<div className='no-activitie'>
                     <h3>No have activities</h3>
                    </div>)}
            </div>
        </div>

        <div className='button-back'>
            <button onClick={returnHome}>
                    Volver
            </button>
        </div>
        
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        p: state.countryDetail,
        page: state.actualPage,
        setPage: state.setPageForFilter
    }

}

export default connect(mapStateToProps,{getCountryDetail})(CountryDetail);
