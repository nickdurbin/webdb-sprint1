const db = require('../../../data/db-config')

async function findProjects() {
  const projects = await db("projects").select()
  return projects.map(project => {
    return { ...project, project_completed: project.project_completed === 1 ? true : false }
  })
}

async function findProjectById(id) {
  const project = await db("projects").where({ id }).first()
  return { ...project, project_completed: project.project_completed === 1 ? true : false }
}

async function addProject(newProject) {
  const [id] = await db("projects").insert(newProject)
  return await db("projects").where({ id }).first()
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