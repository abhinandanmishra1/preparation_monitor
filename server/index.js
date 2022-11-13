const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const gymRouter = require('./routes/gymRoutes')
const userRouter = require('./routes/userRoutes')
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get("/",(req,res)=>{
  res.send("Port Running");
})

app.use('/api/gym', gymRouter)
app.use('/api/user', userRouter)
app.use(errorHandler)

app.listen(port,() => {
  console.log("Listening on port",port);
})
