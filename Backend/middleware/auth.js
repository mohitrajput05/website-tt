const jwt = require('jsonwebtoken');
const config = process.env

exports.varifyToken = (request ,response ,next)=>{
    console.log("hello")
    const token = request.body.token ||request.query.token || request.headers.authorization 
    if(token){
        return response.status(403).json("A token is required for authorization");
    }
    try{
        console.log(token);
        console.log(config.TOKEN_KEY);
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        console.log(decode);
        request.customer =  decoded
    }catch(err){
        console.log(err);
        return response.status(401).json({err:"invalid token" , error:err})
    }   
    return next();
}