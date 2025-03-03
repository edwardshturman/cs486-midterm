import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import mysql, { type ConnectionOptions, type PoolOptions } from "mysql2"

dotenv.config()

const app = express()
const port = 8080
app.use(cors({
  origin: process.env.FRONTEND,
  methods: ["GET", "POST"],
  credentials: true
}))

const config: PoolOptions = {
  user: 'test',
  database: 'test'
}

const connection = mysql.createPool(config)

app.get("/", (req, res) => {
  res.json("Hello World!");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})
