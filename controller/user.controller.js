let User = require('../models/user');

exports.submitUserData = async(req,res,next) => {
    let user;
    try{
        user = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            studentId: req.body.studentId,
            email: req.body.email,
            password: req.body.password
        });

        res.status(201).send({
            success: true,
            error: null,
            message: 'User inserted successfully',
            data: user
        })
    }catch(err){
        res.status(500).send({
            success: false,
            error: err,
            message: 'Error occured when creating user record',
            data: user
        })
    }
}