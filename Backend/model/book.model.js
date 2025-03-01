import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name : {
        type : String,
    },
    price : {
      type : String
    },
    category : {
        type : String,
    },
    image : {
        type : String,
    },
    title : {
        type : String,
    }


})


const Book = mongoose.model("Book",BookSchema)

export default Book