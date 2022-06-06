const db = require('../db/db');

const testsModel = require('../model/testsModel');
const typesModel = require('../model/typesModel')
const exercisesModel = require('../model/exercisesModel')
const pointsModel = require('../model/pointsModel')

//获取考试试题的信息
/**
 * 
 * @param {id} req 上个页面传过来的ID值
 * @param  res 返回查询出来的结果
 */
module.exports.getTestsInfo = async (req, res) => {
  let { id } = req.query;
  console.log('获取的ID', id);
  const result = await testsModel.find({_id:id}).populate("typeId").populate('exercisesId')
  // const result = await testsModel.find({})
  // const result = await testsModel.find({ }).populate({
  //   path: 'exercisesId',
  //   populate: {path: 'pointId'}
  // })
  

  // console.log(result);

  res.json({
    flag: true,
    data: result
  })
}