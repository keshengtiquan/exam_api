var mongoose = require('mongoose');
const { Schema, model } = mongoose;


const pointsSchema = new Schema({
    points: String, // 知识点名称，例如 HTML、CSS...
}, { versionKey: false });
//2.设置数据模型，同时连接数据集合

const pointsModel = model('pointsModel', pointsSchema,'points')

module.exports = pointsModel;
