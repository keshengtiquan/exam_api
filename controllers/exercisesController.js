const db = require('../db/db');

const exercisesModel = require('../model/exercisesModel')

module.exports.getOneExercises = async (req, res) => {
  const {id} = req.query;
  console.log(id);
  const result = await exercisesModel.findOne({'_id':id}).populate('pointId')

  res.json({
    flag: true,
    data: result
  })

}