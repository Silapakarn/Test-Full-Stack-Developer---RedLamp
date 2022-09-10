const express = require("express")
const cors = require("cors")
const TestgetDataRuuter = require('../api/routes/test_get_database.js')
const CategoriesRouter = require('../api/routes/categories.js')
const AttributesRouter = require('../api/routes/attribute.js')
const PurchaseBeverageRouter = require('../api/routes/purchase_beverage.js')
const Phase_of_producing_Router = require('../api/routes/phase_of_producing.js')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

//-------------Test-------------
app.get('/test', (req, res) =>
  res.send("Test Node.js"))


app.use('/api/test', TestgetDataRuuter)
app.use('/api/categories', CategoriesRouter)
app.use('/api/attributes', AttributesRouter)
app.use('/api/purchase_beverage', PurchaseBeverageRouter)
app.use('/api/phase_of_producing', Phase_of_producing_Router)



const port = 8800
app.listen(port, ()=>{
    console.log(`Listening API to port ${port}`)
})