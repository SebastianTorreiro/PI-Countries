import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Country from '../Country/Country.jsx'
import Pagination from '../Pagination/Pagination.jsx';
import Loading from '../Loading/Loading.jsx';
import ErrorLoading from '../ErrorLoading/ErrorLoading.jsx';
import Error from '../Error/Error.jsx';
import {getAllCountries, getContinents, getActivities, errorForzado, setPageInState } from '../../Actions/actionCreator.js'
import './countries.css'

function Countries({allCountries, getAllCountries, error, loading, errorForzado, setPageInState}){

// console.log('renderize')

const [currentPage, setCurrentPage] = useState(1);
const [cardPerPage, setCardPerPage] = useState(8)

useEffect(()=>{
  setPageInState(setCurrentPage, currentPage)
},[currentPage])

useEffect(() =>{
  getAllCountries();
},[])
// let ayuda = 1
// if(allCountries.length !== referenceCountries.length && currentPage !== 1 && ayuda === 1){
//   setCurrentPage(1)
//   ayuda = ayuda - 1
//   console.log(ayuda)
// }
  
let indexOfLastCard = currentPage * cardPerPage
let indexOfFirstCard = indexOfLastCard - cardPerPage;

let currentCards = allCountries.slice(indexOfFirstCard, indexOfLastCard)

const paginate = (number) =>{
  // console.log(number)
  if(!(number === 0 || number > (Math.ceil(allCountries.length/cardPerPage)))) setCurrentPage(number)
}


return(
 <>

  <div className="pagination">
    <Pagination 
    setCardPerPage={setCardPerPage}
    paginate={paginate}
    currentPage={currentPage}
    cardPerPage={cardPerPage}
    totalCards={allCountries.length}
    />
  </div> 
  <div className="cards-container">
    {error ? <Error/> :
      loading ? <Loading/>:
        (allCountries.length === 0) ? <ErrorLoading /> :
          currentCards.length ? (
            currentCards.map((p, index) =>{
              // console.log(p.id)
                return <Country 
                        key={index}
                        name={p.name}
                        id={p.id}
                        img={p.img}
                        continents={p.continents}

                />
          })): null }
  </div>
  <button onClick={errorForzado}></button>

  <div className="paginate">
    <Pagination 
      paginate={paginate}
      currentPage={currentPage}
      cardPerPage={cardPerPage}
      totalCards={allCountries.length}
      />
  </div> 

  </>
)



}

const mapStateToProps = (state) =>{
    return {
        allCountries: state.filtered,
        error: state.errors,
        loading: state.loading,
        referenceCountries: state.countriesReference
    }
}

export default connect(mapStateToProps,{getAllCountries, getContinents, getActivities, errorForzado, setPageInState})(Countries)