//initiate router and fs
const router = require("express").Router();
const fs = require ("fs");
const db = require ("../db/db.json")
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// render notes 
router.get("/api/notes", function (req, res) {
  return res.json(db);
});

//create a new note
router.post("/api/notes", function (req, res) {
  const newNote = req.body;
  newNote.id = uuidv4()
  db.push(newNote);
  fs.writeFileSync(
    "./db/db.json",
    JSON.stringify(db)
  );
  return res.status(200).end();
})


module.exports = router;