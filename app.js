var express = require('express');
const cors = require('cors');


const { getConnection } = require('./db/db-connection');


const usersRouter = require('./routes/user');
const postsRouter = require('./routes/post');
const postCommentRouter = require('./routes/postComment');
const commentResponseRouter = require('./routes/commentResponse'); 
const commentReactionRouter = require('./routes/commentReaction');
const responseReactionRouter = require('./routes/responseReaction');

var app = express();
app.use(cors());

//app.use(morgan("dev"));
app.use(express.json());

getConnection();

app.use('/api/user', usersRouter);
app.use('/api/blog/post', postsRouter);
app.use('/api/blog/postcomments', postCommentRouter);
app.use('/api/blog/commentresponses', commentResponseRouter);
app.use('/api/blog/commentreactions', commentReactionRouter);
app.use('/api/blog/responsereactions', responseReactionRouter);

const server = app.listen(4000, () => {
  console.log("Servidor escuchando en el puerto 4000");
});

module.exports = app;
