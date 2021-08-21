const router = require('express').Router();
const { notes } = require('../../db/db');
const { newNote, findById } = require('../../newNotes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

    // creates new note if id exists, otherwise edits existing note
    if (!req.body.id) {
        newNote(req.body, notes);
    } 

    res.json(req.body);
});



module.exports = router;