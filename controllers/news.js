const { News } = require("../models/news_model");
const { slug } = require("../utils/slug");

const getNewsPage  = async (req,res)=>{
    try {
        let news = await News.find().lean()
        res.render("news",{
            title: "Yangiliklar sahifasi",
            url: process.env.URL,
            news
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({error,message: "Xatolik sodir bo'ldi. Adminga murojaat qiling: +998935368682"})
    }
}

const createNews = async (req,res)=>{
    try {
        let {title,body} = req.body
        let link  = slug(title)
        news = await News.create({title,body,link})
        return res.status(201).json({news,message: "Yangilik ro'yxatga qo'shildi"});
    } catch (error) {
        console.log(error);
        return res.status(400).json({error,message: "Xatolik sodir bo'ldi. Adminga murojaat qiling: +998935368682"})
    }
}
const getNews = async (req,res)=>{
    try {
        let {count} = req.params
        if(count == 0){
            allNews = await News.find().lean();
            return res.status(200).json(allNews)
        }
        console.log(count)
        let getNews = await News.find().sort({ createdAt: 1 }).limit(count);
        return res.status(200).json(getNews)
    } catch (error) {
        console.log(error);
        res.status(400).json({error,message: "Xatolik sodir bo'ldi. Adminga murojaat qiling: +998935368682"})
    }
}
const getSomeNews = async (req,res)=>{
    try {
        let {link} = req.params
        someNews = await News.findOne({link}).lean();
        return res.status(200).json(someNews)
    } catch (error) {
        console.log(error);
        res.status(400).json({error,message: "Xatolik sodir bo'ldi. Adminga murojaat qiling: +998935368682"})
    }
}
module.exports = {
    createNews,
    getNews,
    getSomeNews,
    getNewsPage
}