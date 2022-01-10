const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Note} = require('../../db/models');
const router = express.Router();
//----------------------------------------------------------------------
// Notes Routes

//Get all notes
router.get('/', asyncHandler(async function(_req, res) {
    const notes = await Note.findAll();
    return res.json(notes);
  }));


//Get single note
  router.get('/:id(\\d+)', asyncHandler(async function(req, res) {
    const noteId = req.params.id
    const note = await Note.findByPk(noteId)
    return res.json(note)
}))

//Post new note

// Edit note

//Delete note


module.exports = router
