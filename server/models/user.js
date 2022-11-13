const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    gyms: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Gym',
    }],
    leetcode_username: String,
    codeforces_username: String,
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;

/* dummyData
{
    "user_name": "user1",
    "gyms": ["636f7f1f97c6facfaaaf41b5"],
    "leetcode_username": "user1",
    "codeforces_username": "user1"
}
*/