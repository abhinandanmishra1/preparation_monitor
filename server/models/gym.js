const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    _id: String,
    link: String,
    platform: String,
    name: String,
});

const userSolutions = new Schema({
    user_name: String,
    problem_solutions: {
        problem_id: String,
        solution_id: String,
    },
});
const gymSchema = new Schema({
    _id: String,
    title: String,
    startTime: Date,
    endTime: Date,
    slug: String,
    users: [String],
    problems: [problemSchema],
    lastUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("Gym", gymSchema);

/* dummy data
  {
    "_id": "5f9f5b9b9b9b9b9b9b9b9b9b",
    "title": "Codeforces Gym 101",
    "startTime": "2020-10-29T00:00:00.000Z",
    "endTime": "2020-10-30T00:00:00.000Z",
    "slug": "codeforces-gym-101",
    "users": [
        "5f9f5b9b9b9b9b9b9b9b9b9b",
        "5f9f5b9b9b9b9b9b9b9b9b9b"
    ],
    "problems": [
        {
            "_id": "5f9f5b9b9b9b9b9b9b9b9b9b",
            "link": "https://codeforces.com/gym/101101/problem/A",
            "platform": "Codeforces",
            "name": "A. Problem A"
        }, 
        {
            "_id": "5f9f5b9b9b9b9b9b9b9b9b9b",
            "link": "https://codeforces.com/gym/101101/problem/B",
            "platform": "Codeforces",
            "name": "B. Problem B"
        }
    ],
    "lastUpdated": "2020-10-29T00:00:00.000Z",
  }
*/