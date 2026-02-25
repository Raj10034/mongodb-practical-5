let orders = [];


exports.getOrders = (req,res)=>{

    res.json(orders);

}


exports.addOrder = (req,res)=>{

    const order = {

        id:orders.length+1,
        items:req.body.items

    };

    orders.push(order);

    res.json(order);

}