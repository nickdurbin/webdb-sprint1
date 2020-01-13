const db = require('../../../data/db-config')

async function findResources() {
  return await db("resources")
}

async function findResourceById(id) {
  return await db("resources").where({ id }).first()
}

async function addResource(newResource) {
  const [id] = await db("resources").insert(newResource)
  return await db("resources").where({ id }).first()
}

async function updateResource() {
  return await db("resources")
}

async function deleteResource(id) {
  return await db("resources").where({ id }).del()
}

module.exports = {
  addResource,
  deleteResource,
  findResources,
  findResourceById,
  updateResource
}