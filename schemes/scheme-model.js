const knex = require("knex");
const knexfile = require("../knexfile");
const db = knex(knexfile.development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  //   return db("schemes as s")
  //     .join("steps as st", "s.id", "st.scheme_id")
  //     .select(
  //       "s.id as Scheme ID",
  //       "s.scheme_name as Scheme Name",
  //       "st.step_number as Step Number",
  //       "st.instructions as Instructions"
  //     )
  //     .where({ id });

  return db
    .select(
      "s.id as ID",
      "s.scheme_name as Scheme Name",
      "st.step_number as Step Number",
      "st.step_number as Step Number",
      "st.instructions as Instructions"
    )
    .from("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .where("s.id", id);
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes").where({ id }).del();
}

function addStep(step, scheme_id) {
  return db("steps").insert(step).where({ id: scheme_id });
}
