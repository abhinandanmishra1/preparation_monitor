const Gym = require('../models/gym')

createGym = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a gym',
        })
    }

    const gym = new Gym(body)

    if (!gym) {
        return res.status(400).json({ success: false, error: err })
    }

    gym
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: gym._id,
                message: 'Gym created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Gym not created!',
            })
        })
}

updateGym = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Gym.findOne({ _id: req.params.id }, (err, gym) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Gym not found!',
            })
        }

        gym.title = body.title
        gym.startTime = body.startTime
        gym.endTime = body.endTime
        gym.slug = body.slug
        gym.users = body.users
        gym.problems = body.problems
        gym.lastUpdated = body.lastUpdated

        gym
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: gym._id,
                    message: 'Gym updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Gym not updated!',
                })
            })
    })
}

deleteGym = async (req, res) => {
    await Gym.findOneAndDelete({ _id: req.params.id }, (err, gym) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!gym) {
            return res
                .status(404)
                .json({ success: false, error: `Gym not found` })
        }

        return res.status(200).json({ success: true, data: gym })
    }).catch(err => console.log(err))
}

getGymById = async (req, res) => {
    await Gym.findOne({ _id: req.params.id }, (err, gym) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!gym) {
            return res
                .status(404)
                .json({ success: false, error: `Gym not found` })
        }
        return res.status(200).json({ success: true, data: gym })
    }).catch(err => console.log(err))
}

getGyms = async (req, res) => {
    await Gym.find({}, (err, gyms) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!gyms.length) {
            return res
                .status(404)
                .json({ success: false, error: `Gym not found` })
        }
        return res.status(200).json({ success: true, data: gyms })
    }).catch(err => console.log(err))
}

module.exports = {
    createGym,
    updateGym,
    deleteGym,
    getGyms,
    getGymById,
}
