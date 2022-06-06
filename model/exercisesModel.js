var mongoose = require('mongoose');
const {Schema, model} = mongoose;

var exercisesModelSchema= new Schema(
    {
        topics: String, // 题目、题干
        options: Array,  // 选项 ['HTML', 'CSS', 'JS', 'Nodejs']
        answer: Number, // 正确答案的下标
        analysis: String, // 解析
        score: {   // 每一题的分数，默认每一道题 3 分
            type: Number,
            default: 3
        },
        pointId: {  // 题目所属知识点
            type: Schema.Types.ObjectId,
            ref: 'pointsModel'
        }
    }
)
const exercisesModel = model('exercisesModel',exercisesModelSchema,'exercises')

module.exports = exercisesModel;
