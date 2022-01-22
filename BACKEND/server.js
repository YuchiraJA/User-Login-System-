const express = require("express");
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
//reading url in .env file
require("dotenv").config();

//Define port
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Connect database

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//open created database connection
const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("mongodb Connection success");
})
//access to supplier.js 
// const supplierRouter = require("./routes/supplier.js");
// app.use("/supplier",supplierRouter);

const userRouter = require("./routes/user.js");
app.use("/user",userRouter);

// const classRouter = require("./routes/class");
// app.use("/student",classRouter);

// const studentRouter = require("./routes/student");
// app.use("/student",studentRouter);

// const attendenceRouter = require("./routes/attendence");
// app.use("/student",attendenceRouter);

// const presentRouter = require("./routes/present");
// app.use("/student",presentRouter);

// const absentRouter = require("./routes/absent");
// app.use("/student",absentRouter);

// const paymentRouter = require("./routes/payment");
// app.use("/student",paymentRouter);
// // app.use("/admin",adminRouter);
// // app.use("/mysuporders",myordersRouter);

//running port 8970
app.listen(PORT, () =>{
    console.log(`Server is up and running on port no: ${PORT}`)
})