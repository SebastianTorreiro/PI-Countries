import React, { useEffect, useState } from 'react'
import './searchBar.css'
import {orderBy, filterBy, getContinents, getCountryByName, getAllCountries, getActivities} from '../../Actions/actionCreator.js'
import { connect } from 'react-redux'


function SearchBar({setPageForFilter, getActivities, orderBy, filterBy, getContinents, getCountryByName, getAllCountries,continents, activities }) {

    // console.log(activities)
    
useEffect(() =>{
    getContinents();
},[])


useEffect(() =>{
    getActivities();
},[activities.length])

 

const [filter, setFilter] = useState('');
const [order, setOrder] = useState('')


const handleSelectFilters = (e) =>{
    setFilter(e.target.value)
    filterBy(e.target.value)
    setPageForFilter(1)
}


const deleteFilters = () =>{
    setFilter('')
    setOrder('')
    getAllCountries();
}

const handleInputSearch = (e) => {
    getCountryByName(e.target.value)
    setPageForFilter(1)
}

const handleSelectOrder = (e) => {
    setOrder(e.target.value)
    orderBy(e.target.value)
}

  return (
<div className="search-bar">
    <div className="input-search-bar">

    <input 
    autoComplete='off'
    className='input-search'
    type="text"
    placeholder='Search Country...'
    // value={input}
    onChange={handleInputSearch}
    />

    {/* <button onClick={submitSearch}>Search</button> */}

    </div>
    <div className='container-div'>
        
    <button 
    title=''
    className="button-delete-filters"
    onClick={deleteFilters}
    >
    Quitar Filtros
    </button>
        <select 
        name="Filter" 
        id="Filter" 
        className="select-filter"
        onChange={handleSelectFilters}
        value={filter}
        >
            <option >Filter by...</option>

            <optgroup   label='Continents'>
               {continents && continents.map(c => <option key={c} value={c}>{c}</option>)}           
            </optgroup>

            <optgroup   label='Activities'>
               {activities && activities.map(a=> <option key={a} value={a}>{a}</option>)}           
            </optgroup>
        </select>

        <select 
        name="Order" 
        id="Order"
        className='select-order'
        onChange={handleSelectOrder}
        value={order}
        >
            <option >Order by..</option>

            <optgroup label='Population'>
                <option value="asc">Mayor a menor</option>
                <option value="desc">Menor a mayor</option>
            </optgroup>

            <optgroup label='Alphabetic'>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </optgroup>
        </select>

    </div>
</div>
  
  )
}

const mapStateToProps = (state) => {
    return {
        continents : state.continents,
        activities: state.activities,
        setPageForFilter: state.setPageForFilter
    }
}

export default connect( mapStateToProps,{getActivities, orderBy, filterBy, getContinents, getCountryByName, getAllCountries })(SearchBar);