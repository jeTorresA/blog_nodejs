const { Schema, model } = require('mongoose');


const PostSchema = new Schema({

    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    creationDate : {
        type : Date,
        required : true
    },
    publicationDate : {
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
            'Public',
            'Pending',
            'Retired'
        ]
    }

});

module.exports = model('Post', PostSchema);