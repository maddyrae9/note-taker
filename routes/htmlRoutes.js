//Routes
const router = require('express').Router();
const path = require('path')

//Get path
router.get("/notes", (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'))
})
//Route to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  //Exports
  module.exports =  router;
