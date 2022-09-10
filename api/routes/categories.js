const express = require("express")
const router = express.Router()
const pool = require("../config/database.js")


//--------------display categories of beverages---------------------

router.get('/', async (req, res) => {
    // const id = req.params.id

    const results = await pool.query(`select * from categories`)

    res.json(results[0])
    console.log(results[0])
})


module.exports = router