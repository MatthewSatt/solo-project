const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');
const { Notebook } = require('../../db/models');
const router = express.Router();
//----------------------------------------------------------------------
//Routes


//Get all notebooks
router.get('/', asyncHandler(async function(req, res) {
    const notebooks = await Notebook.findAll();
    return res.json(notebooks);
  }));
//Get single notebook
router.get('/:id(\\d+)', asyncHandler(async function(req, res) {
    const notebookId = req.params.id
    const notebook = await Notebook.findByPk(notebookId)
    return res.json(notebook)
}))

// post new notebook

// edit notebook

// delete notebook


//----------------------------------------------------------------------


module.exports = router
