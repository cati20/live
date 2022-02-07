const mongoose = require('mongoose');
const QueriesSchema = mongoose.Schema({
    name : {
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
    email: {
        type: String,
        required: true,
        
    },
    message: {
        type: String,
        require:true
    }
});

module.exports = mongoose.model('queries', QueriesSchema)