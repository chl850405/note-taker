const router = require("express").Router();
const path = require("path")

//reponds with notes using index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//reponds with notes using notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


module.exports = router;