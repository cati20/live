const mongoose = require('mongoose');
const ReportSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    department: {
        type: String,
        required: false
    },
    activity: {
        type: String,
        required: true
    },
    
    description : {
        type: String,
        required: true
    },
    duration : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('report', ReportSchema)