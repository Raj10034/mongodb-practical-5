let cart = [];


exports.getCart = (req,res)=>{

    res.json(cart);

}


exports.addCart = (req,res)=>{

    const item = {

        productId:req.body.productId,
        quantity:req.body.quantity

    };

    cart.push(item);

    res.json(item);

}