const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    newsId: { type: String, require: true },
    newsHeading: { type: String, require: true },
    newsImage: { type: String, require: true },
    newsDescription: { type: String, require: true },
    newsAuthor: { type: String, require: true },
    newsSource: { type: String, require: true },
    newsUser: { type: String, require: true }
})


module.exports = mongoose.model('news', newsSchema);