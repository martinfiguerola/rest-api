const {Router} = require('express')
const RecordsRoutes = require('./records')

const router = Router()

router.use('/records', RecordsRoutes)


module.exports = router