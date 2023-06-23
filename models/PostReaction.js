const { Schema, model } = require('mongoose');

const PostReactionSchema = new Schema({
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
    post : {
        type : Schema.Types.ObjectId,
        ref : 'Post',
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

module.exports = model('PostReaction', PostReactionSchema);