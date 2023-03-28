const knex = require("../knex");
const USER_TABLE = "users";

module.exports = {
  USER_TABLE,

  getAll(limit = 100) {
    return knex
      .select({
        id: "id",
        name: "name",
      })
      .from(USER_TABLE)
      .limit(limit);
  },

  getUser(id) {
    return knex
      .select({
        id: "id",
        name: "name",
      })
      .from(USER_TABLE)
      .where({
        id: id,
      })
      .first();
  },

  addUser(user) {
    return knex(USER_TABLE).insert(user);
  },

  editUser(id, user) {
    return knex(USER_TABLE)
      .where({ id: id })
      .update(user, ["id"]);
  },

  deleteUser(id) {
    return knex(USER_TABLE)
      .where({ id: id })
      .del();
  },
};