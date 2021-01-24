const router = require('express').Router();
const Owner = require('../models/owner');
const upload = require('../middlewares/uploadPhoto');

// name: String,
// about: String,
// photo: String

router.post('/owners', upload.single('photo'), async (req, res) => {
  try {
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file.location;

    await owner.save();

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
