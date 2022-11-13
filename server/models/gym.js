const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    link: String,
    platform: String,
    name: String,
});

const problemSolutionsSchema = new Schema({
    problem_id: String,
    solution_id: String,
});

const userDetails = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    problem_solutions: [problemSolutionsSchema],
});

const gymSchema = new Schema({
    title: String,
    startTime: Date,
    endTime: Date,
    slug: String,
    problems: [problemSchema],
    users: [userDetails],
});

const gymModel = mongoose.model("Gym", gymSchema);

module.exports = gymModel;

/* dummyData 
{
    "title": "Gym 1",
    "startTime": "2021-01-01T00:00:00.000Z",
    "endTime": "2021-01-01T00:00:00.000Z",
    "slug": "gym-1",
    "problems": [],
    "users": [{
        "user_id": "636f9227b0951fbb46e7dd0b",
        "problem_solutions" : []
    },{
        "user_id": "636f9235b0951fbb46e7dd0e",
        "problem_solutions" : []
    }]
}
*/