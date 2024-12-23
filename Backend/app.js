const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRouter = require('./routes/captain.routes');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectToDb();
app.use(cors());
app.use(cookieParser());
app.use('/users',userRoutes);
app.use('/captains',captainRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

module.exports = app;