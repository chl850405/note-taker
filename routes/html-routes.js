const router = require("express").Router();

//reponds with notes using index.html
router.get('/', (req, res) => {
  //. In Express 4.x this has been simplified and you wouldn't need to use 'path' module
  res.sendFile('index.html', {root: 'public'});
});

//reponds with notes using notes.html
router.get('/notes', (req, res) => {
  //. In Express 4.x this has been simplified and you wouldn't need to use 'path' module
  res.sendFile('notes.html', {root: 'public'});
});


module.exports = router;