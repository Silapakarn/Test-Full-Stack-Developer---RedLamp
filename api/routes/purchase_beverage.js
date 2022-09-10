const express = require("express")
const router = express.Router()
const pool = require("../config/database.js")


//---------------------------purchase coffee----------------------------
router.put('/coffee/:id', async (req, res) => {
    const { id, stock } = req.body

    const result = await pool.query(`update coffee set stock = ${stock} where id = ${id}`)
    
    res.json(result[0])
    console.log(result[0])
})


//---------------------------purchase tea----------------------------
router.put('/tea/:id', async (req, res) => {
    const { id, stock } = req.body

    const result = await pool.query(`update tea set stock = ${stock} where id = ${id}`)
    
    res.json(result[0])
    console.log(result[0])
})


//---------------------------purchase soft_drink----------------------------
router.put('/soft_drink/:id', async (req, res) => {
    const { id, stock } = req.body

    const result = await pool.query(`update soft_drink set stock = ${stock} where id = ${id}`)
    
    res.json(result[0])
    console.log(result[0])
})


module.exports = router