const {Router} = require('express')
const {Records} = require('../models/index')
const router = Router()

router.post('/:prop', async (req, res, next) => {
    //console.log(req.body)
    const body = req.body
    const prop = req.params.prop
    
    try {
        if( isNaN(body[prop]) === false  || !body.hasOwnProperty(prop)){
            // es un numero
            res.json({ 
                error: `${prop} no es un campo válido para convertir a mayúscula`
            })
        
        }
         else{
            body[prop] = body[prop].toUpperCase()
            //console.log(body)
            const document = await Records.create({
                field_1: body.field_1,
                author: body.author,
                description: body.description,
                my_numeric_field: body.my_numeric_field
            })

            res.json({id: document.dataValues.id})
        }
        
    } catch (error) {
        next(error)
    }
    


})
router.get('/:id', async (req, res, next) => {
    console.log(req.params)
    const id = req.params.id
    try {
        const  documentById = await Records.findByPk(id)
        res.json(documentById)
    } catch (error) {
        next(error)
    }

})

module.exports = router