exports.seed = function(knex) {
  return knex('resources')
    .then(function () {
      return knex('resources').insert([
        {id: 1, resource_name: 'Express', resource_description: "A powerful tool to help Node."},
      ]);
    });
};