const { Schema, model } = require('mongoose');
const errorsSchema = new Schema({
    studentId: { // 所属学员 _id
        type: Schema.Types.ObjectId,
        ref: 'studentsModel'
    },
    exerciseId: {
        type: Schema.Types.ObjectId,
        ref: 'exercisesModel'
    },
    errorAnswer: Number, // 错误答案
}, { versionKey: false });
//2.设置数据模型，同时连接数据集合
errorsModel = model('errorsModel', errorsSchema, 'errors');

module.exports = errorsModel;