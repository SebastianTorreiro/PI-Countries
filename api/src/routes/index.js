const { Router } = require('express');
const countryRoutes = require('./countryRoutes')
const activitiesRoutes = require('./activitiesRoutes')
const continentsRouter = require('./continentsRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRoutes)
router.use('/activities', activitiesRoutes)
router.use('/continents', continentsRouter)


module.exports = router;
