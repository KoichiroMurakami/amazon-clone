const router = require('express').Router()
const Address = require('../models/address')
const verifyToken = require('../middlewares/verifyToken')

  // user: { type: Schema.Types.ObjectId, ref: 'User' },
  // country: String,
  // fullName: String,
  // streetAddress: String,
  // city: String,
  // state: String,
  // phoneNumber: Number,
  // zipCode: Number,
  // deliveryInstructions: String,
  // securityCode: String
router.post('/addresses', verifyToken, async (req, res) => {
  try {
    const address = new Address()
    address.user = req.decoded._id
    address.country = req.body.country
    address.fullName = req.body.fullName
    address.streetAddress = req.body.streetAddress
    address.city = req.body.city
    address.state = req.body.state
    address.phoneNumber = req.body.phoneNumber
    address.zipCode = req.body.zipCode
    address.deliveryInstructions = req.body.deliverInstructions
    address.securityCode = req.body.securityCode

    await address.save()

    res.json({
      success: true,
      message: 'successfully saved'
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

router.get('/addresses', verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({ ser: req.decoded._id })

    res.json({
      success: true,
      addresses: addresses
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
})

module.exports = router