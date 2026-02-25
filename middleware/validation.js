exports.validateProduct = (req,res,next)=>{

    const {name,price} = req.body;

    if(!name || !price){
        return res.status(400).json({
            message:"Name and price required"
        });
    }

    next();
}


exports.validateUser = (req,res,next)=>{

    const {name,email} = req.body;

    if(!name || !email){
        return res.status(400).json({
            message:"Name and Email required"
        });
    }

    next();
}