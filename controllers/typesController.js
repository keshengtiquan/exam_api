const db = require('../db/db');

const typesModel = require('../model/typesModel')

module.exports.getTypesInfo = async (req, res) => {
  const result = await typesModel.find()
  // const result = await testsModel.find({_id: id})
  res.json({
    flag: true,
    data: result
  })
}