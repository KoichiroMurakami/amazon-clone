const router = require('express').Router();
const Category = require('../models/category');

//   type: String

router.post('/categories', async (req, res) => {
  try {
    let category = new Category();
    category.type = req.body.type;

    await category.save();

    res.json({
      success: true,
      message: 'successfully saved'
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
