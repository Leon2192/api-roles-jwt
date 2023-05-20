import config from "./config";
import mongoose from "mongoose";

console.log(process.env.USUARIO)

mongoose.connect(`mongodb+srv://${config.USUARIO}:${config.PASSWORD}@cluster0.bmdbuc8.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))