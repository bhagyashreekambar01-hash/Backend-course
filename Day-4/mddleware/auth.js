 const jwt=require("jsonwebtoken");
 require("dotenv").config()
 
 const auth=async (req,res,next) => {
    try{
        const token=req.headers.authentication;
        if(!token){
            return res.status(401).json({
                status:false,
                message:"Token not found"
            })

            const decoded=await jwt.verify(token,process.env.secret_key)

            next();
        }

    } catch (erorr) {
        res.status(401).send(erorr.message)

    }
 }
 module.exports=auth;