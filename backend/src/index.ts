import { Hono } from "hono"
import { cors } from "hono/cors"
import { PrismaClient } from "@prisma/client"

const app = new Hono()
const prisma = new PrismaClient()

app.use("/", cors()) // TODO: restrict origin based on ENV
app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" })
})

app.get("/events", async (c) => {
  const eventCount = await prisma.event.count()
  return c.json({ count: eventCount })
})

export default {
  port: 8081,
  fetch: app.fetch
}
