
exports.up = function(knex) {//cria a tabela(up)
  return knex.schema.createTable('ongs',function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) {//volta atrás para desfazer algo na tabela
  return knex.schema.dropTable('ongs');
};
