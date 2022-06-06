const collectionModel = require('../model/collectoionModel');
const exercisesModel = require('../model/exercisesModel');
const studentsModel = require('../model/studentModel');
//获取收藏题目

module.exports.getCollections = async (req, res, next) => {
  const {_id} = req.query;
  console.log(_id);
  const result = await collectionModel.find({ studentId: _id }).populate('exerciseId')
  // const result = await collectionModel.find({})
  res.json({
    code: 1,
    message: '获取成功',
    result: result
  });

};


