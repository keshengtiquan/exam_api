
const db = require('../db/db')

var testedModel = require('../model/testedModel')

module.exports.setTested =  (req, res)=>{
  let { testsId, studentId, score, time,testsType, testeScore, studentOption } = req.body;
  // console.log(testId, studentId, score, time, testeScore, studentOption);
  studentOption = JSON.parse(studentOption)

  async function todo(){
    let result = await testedModel.findOne({studentId,testsId})

    if(result){
      throw Error('你已经考过试了')
    }else {
      await testedModel.create({testsId, studentId, score, time,testsType, testeScore, studentOption})
    }
  }

  todo().then(function(){
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

module.exports.getTested = async (req, res)=>{
  const { studentId, testsId } = req.query


  let result = await testedModel.findOne({studentId, testsId})
  console.log(result);
  res.json({
    flag: true,
    data: result
  })
}