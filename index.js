const cors = require('cors')
const express = require(`express`)
const mongoose = require(`mongoose`)
require(`dotenv`).config()

const app = express()
const port = 3000

app.use(cors({
  origin:"*",
  methods:"GET,HEAD,POST,PATCH,PUT,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}))
app.use(express.json())

const todoRoutes = require ('./routers/todo')
app.use("/todo", todoRoutes)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_URI)
  .then(()=>
  console.log("Conexion to DB"))
  .catch((err)=>
    console.error(err));

    app.get('/',(req,res) => {
      res.send('Hello World')
  })



app.listen(port, ()=>{
  console.log("-------------------------------------------")
  console.log(`Server on port ${port}:`, `http://localhost:${port}/`)
  console.log("-------------------------------------------")
})



