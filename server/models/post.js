const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    // ! [String] ---> Array of string 
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,

    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})



module.exports = mongoose.model('Post', postSchema)
