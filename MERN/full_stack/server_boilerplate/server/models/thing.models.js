const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlength: [2, 'Title must be at least 2 characters'],
            maxlength: [50, 'Too long'],
        },
    },
    { timestamps: true },
);

const Thing = mongoose.model('Thing', ThingSchema);

module.exports = Thing;
