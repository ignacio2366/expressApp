import express from 'express';
const app = express();
const cors = require('cors')
require('dotenv').config();
import userRouter from './route/Users/user'
import landingRouter from "./route/public/home/home"
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/api/users', userRouter);
app.use('/api/home/', landingRouter)
app.listen(PORT, () => {
    console.log("Running", PORT);
})