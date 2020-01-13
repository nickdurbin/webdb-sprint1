const db = require('../../../data/db-config')

async function findTasks() {
  const tasks = await db("tasks").select()
  return tasks.map(task => {
    return { ...task, task_complete: task.task_complete === 1 ? true : false }
  })
}

async function findTaskById(id) {
  const task = await db("tasks").where({ id }).first()
  return { ...task, task_complete: task.task_complete === 1 ? true : false }
}

async function addTask(newTask) {
  const [id] = await db("tasks").insert(newTask)
  return await db("tasks").where({ id }).first()
}

async function updateTask(changes, id) {
  return await db("tasks").where({ id }).update(changes)
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