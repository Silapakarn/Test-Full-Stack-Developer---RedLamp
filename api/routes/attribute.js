const express = require("express")
const router = express.Router()
const pool = require("../config/database.js")


//--------------Able to multi select an attribute of beverage from master data ---------------------


//-----------Hot or Cold ?------------
router.get('/attribute_type', async (req, res) => {
    // const id = req.params.id

    const results = await pool.query(`select * from attribute`)

    res.json(results[0])
    console.log(results[0])
})

//----------------Attribute coffee-----------------
router.get('/attribute_coffee', async (req, res) => {
    // const id = req.params.id

    const results = await pool.query(`select * from coffee`)
    res.json(results[0])
    console.log(results[0])
})

//----------------Attribute tea-----------------
router.get('/attribute_tea', async (req, res) => {
    // const id = req.params.id

    const results = await pool.query(`select * from tea`)
    res.json(results[0])
    console.log(results[0])
})

//----------------Attribute soft_drink-----------------
router.get('/attribute_soft_drink', async (req, res) => {
    // const id = req.params.id

    const results = await pool.query(`select * from soft_drink`)
    res.json(results[0])
    console.log(results[0])
})

module.exports = router