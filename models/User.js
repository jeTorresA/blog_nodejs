const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true
    },
    rol : {
        type : String,
        required : true,
        enum : [
            'ADMIN',
            'OBSERVER'
        ]
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    creationDate : {
        type : Date,
        required : true
    },
    updateDate : {
        type : Date,
        required : true
    },
    state : {
        type : String,
        required : true,
        enum : [
            'Active',
            'Blocked'
        ]
    }
});

module.exports = model('User', UserSchema);