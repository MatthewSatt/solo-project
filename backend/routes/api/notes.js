const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Note } = require("../../db/models");
const router = express.Router();
//----------------------------------------------------------------------
//Note Validations

const validateNewNote = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this note."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];

const editNoteValidations = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this note."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];

// Notes Routes

//Get all notes
router.get(
  "/",
  asyncHandler(async function (_req, res) {
    const notes = await Note.findAll();
    return res.json(notes);
  })
);

//Get single note
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    return res.json(note);
  })
);

//Post new note
router.post(
  "/new",
  requireAuth,
  validateNewNote,
  asyncHandler(async function (req, res) {
    const note = await Note.create(req.body);
    return res.json(note);
  })
);

// Edit note
router.put(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    if (note !== null) {
      const { title, content } = req.body;
      const newNote = {
        id,
        userId,
        notebookId,
        title,
        content,
      };
    } else {
      throw Error("Unable to edit note");
    }
  })
);

//Delete note

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const note = await Note.findByPk(req.params.id);
    if(!note) throw Error ("Unable to delete note");
    await Note.destroy({ where: {id: note.id} })

  })
);

module.exports = router;
