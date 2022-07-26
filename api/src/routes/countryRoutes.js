const {Router} = require('express');
const router = Router();

const CountryService = require('../service/countryService.js');
const service = new CountryService();


// router.get('/all', async (req, res ) => {
//     const countries = await service.getAllCoutrie();
//     res.json(countries)
// })

router.get('/', async (req, res) => {
    const {name} = req.query;
    try {
        const allCountries = await service.getAllCoutrie()
        if(name){
            const countriesFiltered = await allCountries.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()))
            // console.log(countriesFiltered)
            res.json(countriesFiltered)
        }else{
            res.json(allCountries);
        }  
    }catch(error) {
        res.status(404).json('no match for countries')
    }
})


router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const countrie = await service.getCountrieById(id);
        res.json(countrie);
    } catch (error) {
        res.status(404).json('no match for countries')

    }
})




module.exports = router
