const { Router } = require("express");
const { createNews, getNews, getSomeNews, getNewsPage } = require("../controllers/news");
const router = Router();
router.get("/",getNewsPage)
router.post("/create",createNews);
router.get("/getNews/:count",getNews)
router.get("/one/:link",getSomeNews)
module.exports = router;