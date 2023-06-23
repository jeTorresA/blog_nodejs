const { Schema, model } = require('mongoose');


const PostCommentSchema = new Schema({
    
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    post : {
        type : Schema.Types.ObjectId,
        ref : 'Post',
        required : true
    },
    content : {
        type : String,
        required : true
    },
    commentDate : {
        type : Date,
        required : true
    },
    commentUpdateDate : {
        type : Date,
        required : true
    },
    state : {
        type : String,
        required : true,
        enum : [
            'Public',
            'Oculted',
        ]
    }

});

module.exports = model('PostComment', PostCommentSchema);