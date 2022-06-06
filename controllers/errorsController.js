const db = require('../db/db');

const errorsModel = require('../model/errorsModel')

module.exports.setErrors =  (req, res) => {
  let { errorAnswer,exerciseId,studentId } = req.body;
  errorAnswer = errorAnswer * 1
  console.log(errorAnswer);
  async function doit(){
    const result = await errorsModel.findOne({exerciseId,studentId})
    if(result){
      throw Error('该题已存在')
    }else {
      await errorsModel.create({errorAnswer,exerciseId,studentId})
    }
  }

  doit().then(function(){
    res.json({
      flag: true,
      msg: '添加成功'
    })
  }).catch(function(err){
    res.json({
      flag: false,
      msg: err.message
    })
  })
}

module.exports.getErrors = async function (req, res,next) {
  const data = req.body;
  const result = await errorsModel.find({ studentId: data._id })
    .populate('exerciseId')
  res.send({
    code: 1,
    message: '获取成功',
    result
  });

}