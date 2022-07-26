const Router = require('express')
const router = Router();

const CountryService = require('../service/countryService');
const service = new CountryService

router.get('/', async (req, res)=>{
    try {
        const continents = await service.getContinents();
        res.json(continents);
    } catch (error){
        res.status(404).json('error, continents not found')
    }
})


module.exports = router
