const mongoose = require('mongoose')
const Tenderschema = new mongoose.Schema(
    {
        name: {
            type: String,
            Required: true,
        },
        description: {
            type: String,
            Required: true,
        },
        start_time: {
            type: Date,
            Required: true,
        },
        end_time: {
            type: Date,
            Required: true,
        },
        buffer_time: {
            type: Number,
            default: 0,
        },

    }, {
    timestamps: true
}

)
const TenderModel = mongoose.model('tenders', Tenderschema)
module.exports = TenderModel;