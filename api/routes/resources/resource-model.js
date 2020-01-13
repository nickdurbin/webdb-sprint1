const db = require('../../../data/db-config')

async function findResources() {
  return await db("resources")
}

async function findResourceById(id) {
  return await db("resources").where({ id }).first()
}

async function addResource() {
  return await db("resources")
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