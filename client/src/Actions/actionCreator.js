import axios from "axios";
import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_BY_ID,
    GET_ACTIVITIES,
    ORDER_BY,
    FILTER_BY,
    GET_CONTINENTS,
    SET_LOADING_TRUE,
    SET_LOADING_FALSE,
    SET_ERROR_TRUE,
    SET_FUNCTION,
    CLEAR_DETAIL,
  } from  "./constantes.js";

  const API = process.env.REACT_APP_API


export function getActivities(){
    return function (dispatch){
        return axios.get(API + '/activities')
                    .then((res)=>{
                        dispatch({type: GET_ACTIVITIES, payload: res.data})
                    })
                    .catch(()=>{
                        return dispatch({type: SET_ERROR_TRUE})
                    })
    }
}


export  function getCountryDetail(id){
    return function(dispatch) {
        return axios.get(API + `/countries/${id}`)
                .then((res)=>{
                    dispatch({type:GET_COUNTRY_BY_ID, payload: res.data})  
                })
                .catch(()=>{
                    return dispatch({type: SET_ERROR_TRUE})
                })
    }
}

export function clearDetail(){
    console.log('alo')
    return ({type: CLEAR_DETAIL })
}




export function getAllCountries(){
    return function (dispatch){
        return axios.get( API + '/countries/')
                .then((res)=> {
                    dispatch({type: GET_ALL_COUNTRIES, payload: res.data })
                })
                .catch(()=>{
                    return dispatch({type: SET_ERROR_TRUE})
                })
    }
}

export function postActivity(data){
    return async function(dispatch){
        try {
            const res = await axios.post(API + '/activities', data)
            getActivities();
            return res
        } catch (error) {
            return dispatch({type: SET_ERROR_TRUE})

        }
    }
}

export function setLoadingTrue(){
    return ({type: SET_LOADING_TRUE })
}
export function setLoadingFalse(){
    return ({type: SET_LOADING_FALSE })
}

export function getCountryByName(name){
    return function (dispatch){
        return axios.get(API + `/countries?name=${name}`)
                    .then((res)=>{
                        dispatch({type:GET_COUNTRY_BY_NAME, payload: {countries: res.data, name}})
                    })
                    .catch(()=>{
                        return dispatch({type: SET_ERROR_TRUE})
                    })
    }
}

export function setPageInState(fct, actualPage){
    return ({type:SET_FUNCTION, payload: {fct, actualPage} })
}

export function getContinents(){
    return function (dispatch){
        return axios.get(API + '/continents')
                    .then((res)=>{
                        dispatch({type:GET_CONTINENTS, payload: res.data})
                       
                    })
                    .catch((e)=>{
                        return dispatch({type: SET_ERROR_TRUE})
                    })
    }
}

// export function filterBy(filter){
//     return function(dispatch){
//          dispatch({type: FILTER_BY, payload:filter}) 
//     }
// }

export function filterBy(filter){
    return ({type: FILTER_BY, payload:filter}) 
}

export function orderBy(order){
    return {type: ORDER_BY, payload: order}
}

export function errorForzado(){
    return {type: SET_ERROR_TRUE}
}