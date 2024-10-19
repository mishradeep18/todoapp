const express =require("express");
const app = express();

//load config from env file 
require('dotenv').config();
const PORT = process.env.PORT || 4000;

///midleware to parse json request body 
app.use(express.json());

//import routes for todo api 
const todoRoutes= require("./routes/todos");

//mount todo routes 
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log('server started successfully at ${PORT}');
})

//connect to the database 
const dbConnect = require("./config/database");
dbConnect();

//default route 
app.get("/", (req,res) => {
    res.send(`<h1> THis is HOMEPAGE BABA </h1>`);
})