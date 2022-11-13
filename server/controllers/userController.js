const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const Gym = require('../models/gym')

const createUser = asyncHandler(
    async (req, res) => {
        const { user_name, gyms, leetcode_username, codeforces_username } = req.body
        if(!user_name) {
            res.status(400)
            throw new Error('User name is required')
        }

        const userExists = await User.findOne({ user_name });
        if(userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        const userDetails = {};
        if(user_name) userDetails.user_name = user_name;
        if(gyms) userDetails.gyms = gyms;
        if(leetcode_username) userDetails.leetcode_username = leetcode_username;
        if(codeforces_username) userDetails.codeforces_username = codeforces_username;

        const user = await User.create(userDetails);

        if (user) {
            res.status(201).json(user)
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
)

const updateUser = asyncHandler(
    async (req, res) => {
        const { user_name, gyms, leetcode_username, codeforces_username } = req.body
        const user = await User.findById(req.params.id)

        if (user) {
            user.user_name = user_name || user.user_name
            user.gyms = gyms || user.gyms
            user.leetcode_username = leetcode_username || user.leetcode_username
            user.codeforces_username = codeforces_username || user.codeforces_username

            const updatedUser = await user.save()
            res.json(updatedUser)
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    }
)

const deleteUser = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.params.id)

        if (user) {
            const gyms = user.gyms;
            gyms.forEach(async (gymId) => {
                const gym = await Gym.findById(gymId);
                const newUsers = gym.users.filter((user) => user.user_id != req.params.id);
                gym.users = newUsers;
                await gym.save();
            })
            await user.remove()
            res.json({ message: 'User removed' })
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    }
)

const getUserById = asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.params.id)

        if (user) {
            res.json(user)
        } else {
            res.status(404)
            throw new Error('User not found')
        }
    }
)

const getUsers = asyncHandler(
    async (req, res) => {
        const users = await User.find({});
        if(!users){
            res.status(404);
            throw new Error("No users found");
        }
        res.status(200).json(users);
    }
)

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}
