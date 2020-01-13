exports.seed = function(knex) {
  return knex('tasks')
    .then(function () {
      return knex('tasks').insert([
        {id: 1, task_description: "Create backend for RVNB", task_notes: "Refer to the ReadMe file.", task_complete: false, project_id: 1}
      ]);
    });
};