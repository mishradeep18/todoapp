const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB ka connection is succesfull"))
    .catch( (error) => {
        console.log("Issues in Db connection");
        console.error(error.messsage);
        process.exit(1);
    } );
}

module.exports = dbConnect;