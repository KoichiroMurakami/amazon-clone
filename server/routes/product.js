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
    product.owner = req.body.ownerID
    product.category = req.body.categoryID

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

// get all products
router.get('/products', async (req, res) => {
  try {
    let products = await Product.find()
      .populate('owner category')
      .populate('reviews', 'rating')
      .exec();
    res.json({
      success: true,
      products: products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// get a single product
router.get('/products/:id', async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id })
      .populate('owner category')
      .populate('reviews', 'rating')
      .exec();
    res.json({
      success: true,
      product: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

//  update a single product
router.put('/products/:id', upload.single('photo'), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          photo: req.file.location,
          description: req.body.description,
          stockQuantity: req.body.stockQuantity,
          rating: req.body.rating,
          category: req.body.categoryID,
          owner: req.body.ownerID
        }
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updatedProduct: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// delete a single product
router.delete('/products/:id', async (req, res) => {
  try {
    let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });
    if (deletedProduct) {
      res.json({
        success: true,
        message: 'successfully deleted'
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
