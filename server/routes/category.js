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
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

router.get('/categories', async (req, res) => {
  try {
    let categories = await Category.find();
    res.json({
      success: true,
      categories: categories
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
