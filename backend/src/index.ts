import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/', cors()) // TODO: restrict origin based on ENV
app.get('/', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!'
  })
})

export default {
  port: 8081,
  fetch: app.fetch
}

/*
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
*/
