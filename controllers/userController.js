let users = [];


exports.getUsers = (req,res)=>{

    res.json(users);

}


exports.addUser = (req,res)=>{

    const user = {

        id: users.length + 1,
        name:req.body.name,
        email:req.body.email

    };

    users.push(user);

    res.json(user);

}