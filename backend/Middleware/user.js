const userModel = require('../Models/userModel/userModel')


exports.userRegMiddleware =async (req, res, next) =>{
   try{
      const {fname, lname, email, password, cpassword} = req.body;

      if ( !fname || !lname || !email || !password || !cpassword){
        res.status(401).send('Please fill the details');
      }
      
      if( password !== cpassword){
          res.status(400).send('Password not matched');
      }
      next();
   }
   catch (error){
    console.log(error);
    res.status(500).send(`Failed at user Creation middleware ${error}`);
   }
}

exports.userLoginMiddleware =(req, res, next)=>{
   console.log("Middleware password");

   next();
}