const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const State = new Schema(
    {
        name : {type : String, required : true},
        capital : {type : String, required : true},
        language : {type : String, required : true},
        //population : {type : Number, required : true},
        cm : {type : String, required : true},
    },
    { timestamps: true } 
)

module.exports = mongoose.model('state', State)