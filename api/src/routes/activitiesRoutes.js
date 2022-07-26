const {Router} = require('express')
const router = Router();

const countryService = require('../service/countryService.js')
const service = new countryService();


router.get('/', async (req, res) => {
    try {
        const activities =  await service.getActivities();
        res.status(201).json(activities)
    }catch(error){
    res.status(404).json('error, activities not found')
    }

})

router.post('/', async (req, res)=> {
    try {
        const body = req.body;
        const activitieCreated = await service.createActivitie(body);
        res.json(activitieCreated)
    } catch (e) {
        res.status(404).json(`error, activities can't be create`)
    }
   
})



module.exports = router;