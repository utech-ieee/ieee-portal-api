let Achievement = require('../../models/achievements');
let Junc_user_achievement = require('../../models/junc_user_achievements');

exports.createAchievement = async (req,res) => {
    try{
        let achievement = await Achievement.create({
            name: req.body.name,
            description: req.body.description     
        });

        res.status(200).send({
            succes: true,
            data: null,
            error: null,
            message: "Achievement created successfully!"
        })
    }catch(err){
        console.error(err);
        res.status(500).send({
            succes: false,
            data: null,
            error: err,
            message: "Server could not proceess!"
        })
    }
}