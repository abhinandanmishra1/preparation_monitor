const asyncHandler = require('express-async-handler')
const Gym = require('../models/gym')
const User = require('../models/user')

const createGym = asyncHandler(
    async (req, res) => {
        const { title, startTime, endTime, slug, problems, users } = req.body
        if(!title || !startTime || !endTime || !slug || !problems) {
            res.status(400)
            throw new Error('All Fields are required')
        }
        const gymExists = await Gym.findOne({slug});
        if(gymExists) {
            res.status(400)
            throw new Error('Gym already exists, please use a different slug')
        }

        const gymDetails = {};
        if(title) gymDetails.title = title;
        if(startTime) gymDetails.startTime = startTime;
        if(endTime) gymDetails.endTime = endTime;
        if(slug) gymDetails.slug = slug;
        if(problems) gymDetails.problems = problems;
        if(users) gymDetails.users = users;
        const gym = await Gym.create(gymDetails);

        if (gym) {
            res.status(201).json(gym)
            if(users){
                users.forEach( async (gymUser) => {
                    const user = await User.findById(gymUser.user_id);
                    user.gyms.push(gym._id);
                    await user.save();
                })
            }
        } else {
            res.status(400)
            throw new Error('Invalid gym data')
        }
    }
)

const updateGym = asyncHandler(
    async (req, res) => {
        const { title, startTime, endTime, slug, problems, users } = req.body
        const gym = await Gym.findById(req.params.id)

        if (gym) {
            gym.title = title || gym.title
            gym.startTime = startTime || gym.startTime
            gym.endTime = endTime || gym.endTime
            gym.slug = slug || gym.slug
            gym.problems = problems || gym.problems

            const newUsers = users.filter( (user) => {
                return !gym.users.includes(user);
            });

            const removedUsers = gym.users.filter( (user) => {
                return !users.includes(user);
            });

            // remove gym from removed users
            removedUsers.forEach( async (gymUser) => {
                const user = await User.findById(gymUser.user_id);
                const newGyms = user.gyms.filter((gym) => gym.toString() != req.params.id);
                user.gyms = newGyms;
                await user.save();
            });

            // add gym to new users
            newUsers.forEach( async (gymUser) => {
                const user = await User.findById(gymUser.user_id);
                user.gyms.push(gym._id);
                await user.save();
            });

            gym.users = users || gym.users
            const updatedGym = await gym.save()
            res.json(updatedGym)
        } else {
            res.status(404)
            throw new Error('Gym not found')
        }
    }
)

const deleteGym = asyncHandler(
    async (req, res) => {
        const gym = await Gym.findById(req.params.id)

        if (gym) {
            const users = gym.users;
            users.forEach(async (gymUser) => {
                const user = await User.findById(gymUser.user_id);
                const newGyms = user.gyms.filter((gym) => gym != req.params.id);
                user.gyms = newGyms;
                await user.save();
            })
            await gym.remove()
            res.json({ message: 'Gym removed' })
        } else {
            res.status(404)
            throw new Error('Gym not found')
        }
    }
)

const getGymById = asyncHandler(
    async (req, res) => {
        const gym = await Gym.findById(req.params.id)

        if (gym) {
            res.json(gym)
        } else {
            res.status(404)
            throw new Error('Gym not found')
        }
    }
)

const getGyms = asyncHandler(
    async (req, res) => {
        const gyms = await Gym.find({})
        res.json(gyms)
    }
)

module.exports = {
    createGym,
    updateGym,
    deleteGym,
    getGyms,
    getGymById,
}
