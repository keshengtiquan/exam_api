var mongoose = require('mongoose');
const {Schema, model} = mongoose;

var typesModelSchema= new Schema(
    {
        type: String, // 试卷类型：正式考试、模拟考试、每日一测
    }
)
const typesModel = model('typesModel',typesModelSchema, 'types' )

module.exports = typesModel;
