const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

const Query  = require('../models/Queries')

// post client queries
router.post('/', [
    check('name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please eneter a valid email').isEmail(),
    check('cellphone', 'Please enter a valid cellphone').not().isEmpty(),
    check('message', 'Please eneter your query').not().isEmpty()
],
async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });

    }

    
    const {name, email, cellphone, message} = req.body;
    try{

        newQuery = new Query({
            name,
            email,
            cellphone,
            message
        });
        

         await newQuery.save();
        


        
        
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;