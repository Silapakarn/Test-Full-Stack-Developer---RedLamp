const express = require("express")
const router = express.Router()
const pool = require("../config/database.js")


//--------------Able to display a phase of producing ------------------



//--------------Duration Coffee-----------
router.get('/coffee/:id', async (req, res) => {
    const { id }= req.params
    
    const result = await pool.query(`select duration from coffee where id = ?`, [parseInt(id)])
    
    res.json(result[0])
    console.log(result[0])
})


//--------------Duration tea------------
router.get('/tea/:id', async (req, res) => {
    const { id }= req.params
    
    const result = await pool.query(`select duration from tea where id = ?`, [parseInt(id)])
    
    res.json(result[0])
    console.log(result[0])
})


//--------------Duration soft_drink------------
router.get('/soft_drink/:id', async (req, res) => {
    const { id }= req.params
    
    const result = await pool.query(`select duration from soft_drink where id = ?`, [parseInt(id)])
    
    res.json(result[0])
    console.log(result[0])
})


//--------------Duration attribute------------
router.get('/attribute/:id', async (req, res) => {
    const { id }= req.params
    
    const result = await pool.query(`select duration from attribute where id = ?`, [parseInt(id)])
    
    res.json(result[0])
    console.log(result[0])
})



module.exports = router