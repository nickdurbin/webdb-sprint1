const express = require('express')
const Projects = require('./project-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.findProjects()
    return res.json(projects)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const project = await Projects.findProjectById(id)
    return res.json(project)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("projects").insert(req.body)
    const newProject = await db("projects").where('id', id).first()
    return res.status(201).json(newProject)
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