var mongoose = require('mongoose');
const {Schema, model} = mongoose;

var testsModelSchema= new Schema(
  {
    title: String, // 试卷标题
    date: String, // 考试时间
    time: String, // 答题时长
    typeId: {
        type: Schema.Types.ObjectId,
        ref: 'typesModel'
    },
    exercisesId: [  // 当前试卷关联的所有题目 _id
        {
            type: Schema.Types.ObjectId,
        	ref: 'exercisesModel'
        }
    ] 
}
)
const testsModel = model('testsModel',testsModelSchema, 'tests')

module.exports = testsModel;
