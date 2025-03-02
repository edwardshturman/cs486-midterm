import express from "express"
import mysql, { type ConnectionOptions, type PoolOptions } from 'mysql2'

const app = express()
const port = 8080

const config: PoolOptions = {
  user: 'test',
  database: 'test'
}

const connection = mysql.createPool(config)

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
