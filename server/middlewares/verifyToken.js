const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  // header checked 
  let token = req.headers["x-access-token"] || req.headers["authorization"] 
  //  Bearer is needed in front of token
  let checkBearer = "Bearer "
  
  if (token) {
    if (token.startsWith(checkBearer)) {
      // extracted only token characters
      token = token.slice(checkBearer.length, token.length)
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: "failed to authenticate"
        })
      } else {
        // decoded user object like id, name, etc...
        req.decoded = decoded 
        next()
      } 
    })
  } else {
    res.json({
      success: false,
      message: "no token provided"
    })
  }
}