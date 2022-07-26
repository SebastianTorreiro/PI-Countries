const axios = require('axios')
const baseUrl = 'https://restcountries.com/v3.1'

const getAllCountries = async () => {
    const urlCountry = baseUrl + `/all`
    const getCountriesResponse = await axios.get(urlCountry)
    const ids = [];
    return getCountriesResponse.data.map(country => {
        let {
            name,
            continents,
            flags,
            capital,
            subregion,
            population, 
            maps,
            fifa,
            area,
        } = country

        if(!fifa) return false
        // if(!fifa)  fifa = name.official.substring(0,3).toUpperCase();    
        // if(ids.includes(fifa)) fifa = name.official.substring(name.official.length -3,3).toUpperCase();
        ids.push(fifa)
        // if(typeof capital === 'object'){
        //     if(capital.length > 1) console.log(capital)
        // }
        // if(continents.length > 1) console.log(continents)
        if(typeof capital === 'object') capital = capital[0];

        return {
            name:name.common,
            continents:continents[0],
            img:flags.png,
            capital,
            subregion,
            population,
            // maps,
            id:fifa,
            area
        }
    })
}

// const getCountryByName = async (name) =>{
//     const urlCountry = baseUrl + `/name/${name}`
//     console.log(urlCountry);
//     const getCountryResponse = await axios.get(urlCountry)
//     return getCountryResponse.data.map(country => {
//         const {
//             name,
//             continents,
//             flags,
//             capital,
//             subregion,
//             population,
//             maps,
//             fifa,
//             area
//         } = country
        
//         return {
//             name: name.official,
//             continents:continents[0] ,
//             img:flags.png,
//             capital:capital[0],
//             subregion,
//             population,
//             // maps,
//             id: fifa,
//             area
//         }
//     })

// }

const getContinents = async () =>{
    const urlCountry = baseUrl + '/all'
    const getCountriesResponse = await axios.get(urlCountry)
    const continentes1 = [];
    getCountriesResponse.data.map((country) =>{
            const {continents} = country
            if (!continentes1.includes(continents[0])) continentes1.push(continents[0])
            return false   
    })
    console.log(continentes1)
    return continentes1
}

// async function prueba(){
//     const prueba = await getCountry('arg');
//     console.log(prueba)
// }
// prueba()



// const mapContinentsInfo = (continent) => {
//     return continent.map(continent => continent)
// }

module.exports = {
    getAllCountries,
    getContinents
}