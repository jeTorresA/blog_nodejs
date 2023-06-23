const { Schema, model } = require('mongoose');

const ResponseReactionSchema = new Schema({
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    reaction : {
        type : String,
        required : true,
        enum : [
            'Like',
            'Dislike'
        ]
    },
    response : {
        type : Schema.Types.ObjectId,
        ref : 'CommentResponse',
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

module.exports = model('ResponseReaction', ResponseReactionSchema);