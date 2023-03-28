/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { id: 1, name: "TestUser1" },
    { id: 2, name: "TestUser2" },
    { id: 3, name: "TestUser3" },
  ]);
};
