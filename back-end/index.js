const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routers')
const app = express();
var cookieParser = require('cookie-parser')
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Địa chỉ frontend
    credentials: true, // Cho phép gửi cookie
  })
);

app.use(cookieParser())
app.use(express.json({ extended: true, limit: "10mb" }))
app.use("/api", router)
const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to Db")
    console.log("Server is running");
  })
})

