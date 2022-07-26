import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Start from './Components/Start/Start.jsx'
import Home from './Components/Home/Home.jsx';
import CountryDetail from './Components/CountryDetail/CountryDetail.jsx'
import Form from './Components/Form/Form.jsx';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Start />} />
      <Route exact path="/countries" element={<Home/>}/>
      <Route exact path="/countries/:id" element={ <CountryDetail/> } />
      <Route exact path="/addActivitie" element={<Form/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
