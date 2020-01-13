exports.seed = function(knex) {
  return knex('tasks_contexts')
    .then(function () {
      return knex('tasks_contexts').insert([
        {task_id: 1, context_id: 1}
      ]);
    });
};