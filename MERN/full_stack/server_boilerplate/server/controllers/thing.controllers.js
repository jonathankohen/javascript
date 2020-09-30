const Thing = require('../models/thing.models');

module.exports = {
    index: (req, res) => {
        Thing.find()
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    create: (req, res) => {
        Thing.create(req.body)
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    show: (req, res) => {
        Thing.findOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    update: (req, res) => {
        Thing.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then((data) => res.json({ results: data }))
            .catch((err) => res.json(err.errors));
    },
    destroy: (req, res) => {
        Thing.deleteOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch((err) => res.json(err.errors));
    },
};
