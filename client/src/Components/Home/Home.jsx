import React from 'react'
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Countries from '../Countries/Countries';


export default function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <SearchBar/>
        <Countries/>
    </div>
  )
}
