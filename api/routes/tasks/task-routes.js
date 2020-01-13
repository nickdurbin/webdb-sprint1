const express = require('express')
const Tasks = require('./task-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.findTasks()
    return res.json(tasks)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await Tasks.findTaskById(id)
    return res.json(task)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("tasks").insert(req.body)
    const newTask = await db("tasks").where('id', id).first()
    return res.status(201).json(newTask)
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