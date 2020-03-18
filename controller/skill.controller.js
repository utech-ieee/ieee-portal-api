let Skill = require('../models/skill');

exports.submitSkillData = function(req,res){
    let skill
    try{
        skill = Skill.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            field: req.body.field
        });

        res.status(201).send({
            success: true,
            message: 'Skill created successfully',
            error: null,
            data: skill
        });
    }catch(err){
        res.status(500).send({
            success: false,
            message: 'Skill could not be created',
            error: err,
            data: skill
        })
    }
}