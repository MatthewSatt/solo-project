const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Notebook } = require('../../db/models');
const router = express.Router();
//----------------------------------------------------------------------

//Notebook Validations

const validateNewNotebook = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this notebook."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];



const editNotebookValidations = [
  check("title")
    .notEmpty()
    .withMessage("You must include a title for this notebook."),
  check("title")
    .isLength({ max: 45 })
    .withMessage("Title must not be longer than 45 letters"),
  handleValidationErrors,
];

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
router.post(
  "/",
  requireAuth,
  validateNewNotebook,
  asyncHandler(async function (req, res) {
    const notebook = await Notebook.create(req.body);
    return res.json(notebook);
  })
);



// edit notebook

router.put(
  "/:id",
  requireAuth,
  editNotebookValidations,
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const notebook = await Notebook.findByPk(id);
    if (notebook !== null) {
      const { title } = req.body;
      const newNotebook = {
        id,
        userId,
        title,
      };
    } else {
      throw Error("Unable to edit notebook");
    }
  })
);

// delete notebook

router.delete(
  "/remove/:id",
  requireAuth,
  asyncHandler(async function (req, res) {
    console.log('backend!')
    const notebook = await Notebook.findByPk(req.params.id);
    if(!notebook) throw Error ("Unable to delete notebook");
    await Notebook.destroy({ where: {id: notebook.id} })

  })
);

//----------------------------------------------------------------------


module.exports = router
