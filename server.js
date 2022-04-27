require('dotenv').config()
const express = require('express')
require('./config/database')
const PORT = 4000 
const Router = require('./routes/routes')
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json());
app.use("/api", Router)


app.listen(PORT, () => console.log('Server Listo en el puerto  ' + PORT))