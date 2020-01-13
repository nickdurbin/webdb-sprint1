exports.seed = function(knex) {
  return knex('contexts')
    .then(function () {
      return knex('contexts').insert([
        {id: 1, context_description: "Use with NodeJS."}
      ]);
    });
};