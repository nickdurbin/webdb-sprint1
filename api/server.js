const express = require('express')
const server = express()
const routes = ('./routes')
const middleware = ('./middleware')

server.use(express.json())
middleware(server)
routes(server)

server.get("/", (req, res) => {
  server.send("<h2>I am your server and I am alive!</h2>")
})

server.use((req, res, next) => {
  res.status(404).json({ message: "The path you tried to reach does not exist. Try again."})
})

server.use((next, req, res, next) => {
  res.status(500).message({ message: "This is our fault. Please try again later."})
})

module.exports = server;