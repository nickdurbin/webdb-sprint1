const db = require('../../../data/db-config')

async function findProjects() {
  return await db("projects")
}

async function findProjectById(id) {
  return await db("projects").where({ id }).first()
}

async function addProject() {
  return await db("projects")
}

async function updateProject() {
  return await db("projects")
}

async function deleteProject(id) {
  return await db("projects").where({ id }).del()
}

module.exports = {
  addProject,
  deleteProject,
  findProjects,
  findProjectById,
  updateProject
}