let products = [];


exports.getProducts = (req,res)=>{

    res.json(products);

}


exports.addProduct = (req,res)=>{

    const product = {

        id: products.length + 1,
        name:req.body.name,
        price:req.body.price

    };

    products.push(product);

    res.json(product);

}