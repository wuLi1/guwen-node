/**
 * guwen  db Model
 */
const mongoose = require('mongoose')
const config = require('../config/conf')
const mongoosePaginate = require('mongoose-paginate')
mongoose.Promise = global.Promise;
let url = `mongodb://${config.originIp}/${config.mongoDB.guwenbook}`;
let conno = mongoose.createConnection(url, config.options);
let db = mongoose.connection;
db.on('connected', function () {
    console.log(' guwenbookDB connect success')
})

let bookItem = mongoose.Schema({
    name: String,
    author: String,
    chapter: String,

    content: String,
    title: String,
    translator: String,
    translate: String,
    originUrl: String,
})
bookItem.plugin(mongoosePaginate);
let model = (docName) => {
    return  conno.model(docName, bookItem);
};

/**
 * return 一个 model连接函数
 */
module.exports = {
    getModel: model
}