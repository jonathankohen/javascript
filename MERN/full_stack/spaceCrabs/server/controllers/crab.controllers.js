const Crab = require('../models/crab.model');

module.exports = {
    index: (req, res) => {
        Crab.find()
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    create: (req, res) => {
        Crab.create(req.body)
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    show: (req, res) => {
        Crab.findOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch((err) => console.log(err));
    },
    update: (req, res) => {
        Crab.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then((data) => res.json({ results: data }))
            .catch((err) => res.json(err.errors));
    },
    destroy: (req, res) => {
        Crab.deleteOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch((err) => res.json(err.errors));
    },
};
