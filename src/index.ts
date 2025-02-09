import express from 'express';
const app = express();

require('dotenv').config();
import userRouter from './route/Users/user'
const PORT = process.env.PORT || 8080;

app.use('/api/users', userRouter);
app.listen(PORT, () => {
    console.log("Running", PORT);
})