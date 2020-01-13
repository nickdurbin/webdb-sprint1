const express = require('express')
const Resources = require('./resource-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.findResources()
    return res.json(resources)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const resource = await Resources.findResourceById(id)
    return res.json(resource)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("resources").insert(req.body)
    const newResource = await db("resources").where('id', id).first()
    return res.status(201).json(newResource)
  } catch (err) {
    next(err)
  }
})

router.put("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.delete("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

module.exports = router