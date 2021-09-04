const News = require('../controller/news.entity');
const {uuid} = require("uuidv4");

module.exports = {
    readNow : () =>{
        return News.find()
    },

    readLater : async args =>{
        let existingNews = await News.findOne({newsHeading : args.newsInput.newsHeading})
        if(existingNews)
            throw new Error("News already exists");
        
        let newsToBeReadLater = new News({
            newsId : uuid(),
            newsHeading : args.newsInput.newsHeading,
            newsImage : args.newsInput.newsImage,
            newsDescription : args.newsInput.newsDescription,
            newsAuthor: args.newsInput.newsAuthor,
            newsSource: args.newsInput.newsSource,
            newsUser: args.newsInput.newsUser

        })
        let result = await newsToBeReadLater.save();
        return { ...result._doc, _id: result.newsId}
    }
}