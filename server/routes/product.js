const router = require('express').Router();
const Product = require('../models/product');
const upload = require('../middlewares/uploadPhoto');

// category: { type: Schema.Types.ObjectId, ref: 'Category' },
// owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
// title: String,
// description: String,
// photo: String,
// price: Number,
// stockQuantity: Number,
// rating: [Number]

router.post('/products', upload.single('photo'), async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.price = req.body.price;
    product.stockQuantity = req.body.stockQuantity;
    product.rating = req.body.rating;

    await product.save();

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

module.exports = router;
