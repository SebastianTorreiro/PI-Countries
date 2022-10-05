import { GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_BY_ID,
    ORDER_BY,
    FILTER_BY,
    GET_CONTINENTS,
    GET_ACTIVITIES,
    SET_LOADING_FALSE,
    SET_LOADING_TRUE ,
    SET_ERROR_FALSE,
    SET_ERROR_TRUE,
    SET_FUNCTION,
    CLEAR_DETAIL,
    }  from '../Actions/constantes.js'


const initialState = {
    allCountries: [],
    countryDetail: {},
    activities:[],
    continents:[],
    filtered:[],
    countriesReference:[],
    loading:true,
    errors:false,
    nameSearch:'',
    setPageForFilter: null,
    actualPage:NaN
}



export default function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                filtered: action.payload,
                countriesReference: action.payload,
                loading:false,
                error:false
            }
        case GET_CONTINENTS:
            return {
                ...state,
                continents: action.payload
            };
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }
        case GET_COUNTRY_BY_NAME:
            // console.log(action.payload)
            return{
                ...state,
                filtered: action.payload.countries,
                nameSearch: action.payload.name 
            }
        case GET_COUNTRY_BY_ID:
            return{
                ...state,
                countryDetail: action.payload
            }
        case FILTER_BY:
            console.log(action.payload)
            if(action.payload === 'default'){
                return {
                    ...state,
                    filtered: state.countriesReference
                }
            };
            if(state.activities.includes(action.payload)){
                // const countrysActivities = state.allCountries.filter(e => e.activities > 0)
                // console.log(countrysActivities)
                return{
                    ...state,
                    filtered: state.allCountries.filter(c => c.activities.find((element) => element.name === action.payload))
                
                }
            }else{
                return {
                    ...state,
                    filtered: state.allCountries.filter((country)=>{
                        return (country.continents === action.payload)
                    })
                };
            }
        case ORDER_BY:
            if(action.payload === 'A-Z'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    return 0
                })}}
            console.log(action.payload)
            if(action.payload === 'Z-A'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => {
                    if(prev.name > next.name) return -1
                    if(prev.name < next.name) return 1
                    return 0
                })}};
            if(action.payload === 'desc'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => prev.population - next.population )}
            }
            if(action.payload === 'asc'){
                return {...state, filtered: [...state.filtered].sort((prev, next) => next.population - prev.population )}
            }
        case SET_LOADING_FALSE: 
            return{
                ...state,
                loading: false
            }
        case SET_LOADING_TRUE: 
            return{
                ...state,
                loading: true
            }
        case SET_ERROR_FALSE:
            return{
                ...state,
                errors: false
            }
        case SET_ERROR_TRUE:
            return{
                ...state,
                errors: true
            }
        case CLEAR_DETAIL:
            console.log('estoy aca perras')
            return {
                ...state,
                countryDetail: {}
            }
        case SET_FUNCTION:
            return{
                ...state,
                setPageForFilter: action.payload.fct,
                actualPage:action.payload.actualPage
            }
        default:
            return state;
    }
}



