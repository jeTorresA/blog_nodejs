const { Schema, model } = require('mongoose');

const CommentReactionSchema = new Schema({
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
    comment : {
        type : Schema.Types.ObjectId,
        ref : 'PostComment',
        required : true
    },
    reactionDate : {
        type : Date,
        required : true
    },
    reactionUpdateDate : {
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

module.exports = model('CommentReaction', CommentReactionSchema);