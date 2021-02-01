const router = require('express').Router()
const moment = require('moment')

const SHIPMENT = {
  normal: {
    price: 19.98,    
    days: 7
  },
  fast: {
    price: 49.98,
    days: 3
  }
}

function shipmentPrice (shipmentOption) {
  let estimated = moment().add(shipmentOption.days, 'd').format('dddd MMMM Do')

  return { estimated, price: shipmentOption.price}
}

router.post('/shipment', async (req, res) => {
  try {
    let shipmemnt 
    if (req.body.shipment === 'normal') {
      shipment = shipmentPrice(SHIPMENT.normal)
    } else {
      shipment = shipmentPrice(SHIPMENT.fast)
    }

    res.json({ success: true, shipmemnt: shipment})
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router