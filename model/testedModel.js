const { Schema, model } = require('mongoose');
const testedSchema = new Schema({
    studentId: { // 所属学员 _id
        type: Schema.Types.ObjectId,
        ref: 'studentsModel'
    },
    testsId: { // 关联试卷 _id
        type: Schema.Types.ObjectId,
        ref: 'testsModel'
    },
    testsType: String,
    score: String, // 成绩
    time:String, //存储考试时
    testeScore: String,//试卷总分
    studentOption:Array //用户答案
}, { versionKey: false });
const testedModel = model('testedModel', testedSchema, 'testeds');
module.exports = testedModel;