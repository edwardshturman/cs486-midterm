import app from "@/src"
import { describe, expect, it } from "bun:test"

describe("Test API from backend", () => {
  it("Should find Hello World", async () => {
    const req = new Request("http://localhost/")
    const res = await app.fetch(req)
    const json = await res.json()
    expect(json.message).toBe("Hello Hono!")
  })
})
