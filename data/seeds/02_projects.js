exports.seed = function(knex) {
  return knex('projects')
    .then(function () {
      return knex('projects').insert([
        {id: 1, project_name: "RVNB", project_description: "A two-way market place for RV owners and land owners", project_completed: false}
      ]);
    });
};