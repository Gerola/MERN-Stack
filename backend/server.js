const express = require('express')
const mongoose = require('mongoose')
const inventoryRoutes = require('./routes/inventory')


//Creates the express app
const app = express()


//Listen for requests
app.use((req,res,next) => {next()})
app.use(express.json())


//Note Use 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/MERN-STACK')
        .then(() =>
            {
                app.listen(4000)
                console.log("In the database :)")
            }
        )

//Use the inventory Routes when the inventory is accessed
app.use('/inventory', inventoryRoutes)
