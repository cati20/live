const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const User  = require('../models/User')
const Report  = require('../models/report')

// @route       GET api/bookings
// @ desc       Get all user bookings
// @access      Private
 router.get('/',auth,async (req, res) =>{
    try {
        const user = await  Report.find({user: req.user.id}).sort({date: -1});
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
        
    }
}); 

// @route       POST api/bookings
// @ desc       Add new bookings
// @access      Private
router.post('/',[auth, [
   
    check('activity', 'Please enter your activity').not().isEmpty(),
    check('description', 'Please enter your description').not().isEmpty(),
    check('duration', 'Please enter a valid duration').not().isEmpty(),
   
]], 
async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {activity,description, duration} = req.body;

    try {
        const newReport = new Report ({
                
                activity,
                description,
                duration,
                user : req.user.id,
                department : req.user.department,
                
                
        });

        const report = await newReport.save();

        res.json(report);
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }
});

// @route       PUT api/bookings/:id
// @ desc       Update bookings
// @access      Private
router.put('/:id',auth ,async (req, res) =>{
    const {department,activity, description, duration} = req.body;
    
    //build booking object
    const reportFields = {}
    if(department) reportFields.name = department;
    if(activity) reportFields.activity = activity;
    if(description) reportFields.description = description;
    if(duration) reportFields.duration = duration;
    

    try {
        let report = await Report.findById(req.params.id);
        if(!report) return res.status(404).json({mssg:'report not found'});

        //make sure client owns bookings
        if (report.user.toString() != req.user.id){
           return res.status(401).json({msg:'Not authorized'});
             
        }

        //update booking
        report = await Report.findByIdAndUpdate(req.params.id,
            {$set: reportFields},
            {new: true});

            res.json(report)
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }

});

// @route       GET api/bookings
// @ desc       Delete Clients bookings
// @access      Pricate
router.delete('/:id', auth ,async (req, res) =>{
    try {
        let report = await Report.findById(req.params.id);
        if(!report) return res.status(404).json({mssg:'report not found'});

        //make sure client owns bookings
        if (report.user.toString() != req.user.id){
           return res.status(401).json({msg:'Not authorized'});
             
        }

        await Report.findByIdAndRemove(req.params.id)

            res.json({msg : 'report removed'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'Server error'})
    }
});


//for admin access routes
/* router.get('/',async (req, res) =>{
    try {
        const booking = await  Booking.find();
        res.json(booking)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
        
    }
});
 */



module.exports = router;