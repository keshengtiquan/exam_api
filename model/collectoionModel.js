const { Schema, model } = require('mongoose');

const collectionSchema = new Schema({
  studentId: {   // 所属学员 _id
    type: Schema.Types.ObjectId,
    ref: "studentsModel",
  },
  exerciseId: {
    type: Schema.Types.ObjectId,
    ref: "exercisesModel",
  }
}, {
  versionKey: false  //不显示字段"__v"
})

// module.exports.collectionModel = model('collection', collectionSchema);

//创建数据模型
const collectionModel = new model('collectionModel', collectionSchema,'collections');

//导出数据模型
module.exports = collectionModel;
