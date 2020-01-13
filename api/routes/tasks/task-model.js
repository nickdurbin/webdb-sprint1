const db = require('../../../data/db-config')

async function findTasks() {
  return await db("tasks")
}

async function findTaskById(id) {
  return await db("tasks").where({ id }).first()
}

async function addTask() {
  return await db("tasks")
}

async function updateTask() {
  return await db("tasks")
}

async function deleteTask(id) {
  return await db("tasks").where({ id }).del()
}

module.exports = {
  addTask,
  deleteTask,
  findTasks,
  findTaskById,
  updateTask
}