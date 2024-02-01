const {Schema,model} = require("mongoose")

const newsSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            maxLength: 100,
        },
        link: {
            type: String,
            require: true,
            unique: true,
            maxLength: 106,
        },
        body: {
            type: String,
            require: true,
            //minLength: 100
        }
    },{
        timestamps: true
    }
)
const News = model("News",newsSchema);
module.exports = {News}