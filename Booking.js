const mongoose = require('mongoose');
const BookingSchema = mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clients'
    },
    name : {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    
    cellphone : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    },
    appointment: {
        type: String,
        required: true,
        unique:false
        
    },
    styling: {
        type: String,
        required: true,
        unique:false
    },
    time: {
        type:String,
        required:true,
        unique: true
    },
    colour: {
        type: String,
        unique:false
    
    }
});

module.exports = mongoose.model('booking', BookingSchema)