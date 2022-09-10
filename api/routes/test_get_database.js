const express = require("express")
const router = express.Router()
const pool = require("../config/database.js")



//---------------------------Test----------------------------
router.get('/coffee', async (req, res) => {
    const { id } = req.params

    const result = await pool.query(`SELECT * FROM coffee`)

    res.json(result[0])
    console.log(result[0])
})


module.exports = router