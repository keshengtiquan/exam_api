const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
  avatar: String, //头像
  gender: String,
  name: String,
  password: String,
  phone: String
}, {
  versionKey: false
});

//创建数据模型
const studentsModel = new model('students', studentSchema);

//导出数据模型
module.exports = studentsModel;