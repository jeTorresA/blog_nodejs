const { Schema, model } = require('mongoose');

const CommentResponseSchema = new Schema({
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    response : {
        type :  String,
        required : true
    },
    comment : {
        type : Schema.Types.ObjectId,
        ref : 'PostComment',
        required : true
    },
    responseDate : {
        type : Date,
        required : true
    },
    responseUpdateDate : {
        type : Date,
        required : true
    },
    state : {
        type : String,
        required : true,
        enum : [
            'Public',
            'Oculted'
        ]
    }
});

module.exports = model('CommentResponse', CommentResponseSchema);