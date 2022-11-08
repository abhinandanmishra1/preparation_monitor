const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    present_gym: [String],
    past_gym: [String],
    lastUpdated:{
        type: Date,
        default: Date.now,
    },
    leetcode_username: String,
    codeforces_username: String,
})

exports.User = mongoose.model("User",userSchema)
