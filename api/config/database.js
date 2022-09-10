const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "master_data",
})

module.exports = pool