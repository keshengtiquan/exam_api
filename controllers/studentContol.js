const studentsModel = require('../model/studentModel');

// const jwt = require("jsonwebtoken");


//获取个人信息
module.exports.getUSerInfo = async function (req, res) {
  const { _id } = req.body;
  console.log(_id);
  const userInfo = await studentsModel.find({ _id })
  .then(function (result) {
    res.json({
      flag: true,
      data: result,
      msg: '信息获取成功'
    })
  })
};

//修改个人信息
