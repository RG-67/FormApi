var mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    city:{
        type:String
    },
    pinCode:{
        type:Number
    },
    image:{
        type:String
    },
    gender:{
        type:String
    },
    priority:{
        type:Number 
    },
    createdOn: {
        type: Date,
    },
    updatedOn: {
        type: Date,
        require: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },  
})

module.exports = mongoose.model('form', formSchema);
