//Server JSON data
const router = require('express').Router();
const db = require ('../db');

//Calling Express Routes
router.get('/notes', (req, res) => {
    db.readAllNotes().then ((notes) => {
        return res.json(notes)
    });
})
router.post('/notes', (req, res) => {
    db.writeNotes(req.body).then((notes) => {
        return res.json(notes)
    });
})
router.delete('/notes/:id', (req, res) => {
    db.deleteNotes(req.params.id).then(() => {
        return res.json({ok: true})
    });
    })

//Exports
module.exports = router;