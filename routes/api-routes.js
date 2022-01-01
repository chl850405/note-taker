//initiate router and fs
const router = require("express").Router();
const fs = require ("fs");

// render notes 
router.get("/api/notes", function (req, res) {
  return res.json("./db/db.json");
});

//create a new note
router.post("/api/notes", function (req, res) {
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, './data/db.json'),
    JSON.stringify({ db: notesArray }, null, 2)
  );
  return res.status(200).end();
})

//delete notes
router.delete("/api/notes/:id", function (req, res) {
  res.send("Got a DELETE request at /api/notes/:id");

    // Obtains id and converts to a string
    let id = req.params.id.toString();
    console.log(id);

    // Goes through notesArray searching for matching ID
    for (i=0; i < "db/db.json".length; i++){
      
        if ("db/db.json"[i].id == id){
            console.log("match!");
            // responds with deleted note
            res.send("db/db.json"[i]);

            // Removes the deleted note
            notesData.splice(i,1);
            break;
        }
      
  rewriteNotes();
      }
});

//writes to database
function rewriteNotes() {
   // Converts new JSON Array back to string
  notes = JSON.stringify(notes);
  console.log (notes);
  fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
      if (err) {
          console.log("error")
          return console.log(err);
      }

      console.log("Success!");
  });
}

module.exports = router;