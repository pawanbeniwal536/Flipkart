const jwt = require('jsonwebtoken')

const fetchUser = async(req,res,next) => {
  try {
    
    // const token  = req.header('auth-token');
    const { token } = req.body;
    if(!token){
      res.status(401).send({ error: "Please authenticate using a valid token" })
    }

      const data = jwt.verify(token,process.env.JWT_SECRET)
      req.user = data;
      next()


  } catch (error) {
    console.log("IT is the error in the fetchUser",error)
    res.status(500).json({message:"Error in verified the token",});
  }
}

module.exports = fetchUser 