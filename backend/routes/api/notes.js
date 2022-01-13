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
  requireAuth,
  asyncHandler(async function (_req, res) {
    const notes = await Note.findAll();
    return res.json(notes);
  })
);

//Get single note
router.get(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async function (req, res) {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    return res.json(note);
  })
);

TODO: "GET THE FORM BEFORE YOU CAN MAKE A POST";

//Post new note
router.post(
  "/",
  requireAuth,
  // validateNote,
  asyncHandler(async (req, res) => {
    const { title, content, notebookId, userId } = req.body;
    const note = await Note.create({
      title,
      content,
      notebookId,
      userId,
    });
    console.log(note);
    return res.json(note);
  })
);

// Edit note
router.put(
  "/:id",
  requireAuth,
  editNoteValidations,
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const note = await Note.findByPk(id);
    const { title, content, userId, notebookId } = req.body;
    const newNote = await note.update({
      id,
      title,
      content,
      notebookId,
      userId
    });
    return res.json(newNote);
  })
);

//Delete note

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    const note = await Note.findByPk(req.params.id);
    if (!note) throw Error("Unable to delete note");
    await Note.destroy({ where: { id: note.id } });
  })
);

module.exports = router;
