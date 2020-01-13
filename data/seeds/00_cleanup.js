exports.seed = async (knex) => {
  await knex("tasks_contexts").truncate()
  await knex("tasks").truncate()
  await knex("contexts").truncate()
  await knex("projects_resources").truncate()
  await knex("projects").truncate()
  await knex("resources").truncate()
}