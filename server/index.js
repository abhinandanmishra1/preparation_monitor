const express = require("express");
const app = express();


const cors = require("cors");
const gymRouter = require('./routes')
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/",async (req,res)=>{
  res.send("Port Running");
})

app.use('/api', gymRouter)

app.listen(port,() => {
  console.log("Listening on port",port);
})
