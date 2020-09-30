const mongoose = require('mongoose');

const CrabSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minlength: [2, 'Name must be at least 2 characters'],
        },
        spaceShip: {
            type: String,
            required: [true, 'A crab needs a ship!'],
            minlength: [2, 'Ship name must be at least 2 characters'],
        },
        weaponOne: {
            type: String,
            default: '',
        },
        weaponTwo: {
            type: String,
            default: '',
        },
        weaponThree: {
            type: String,
            default: '',
        },
    },
    { timestamps: true },
);

const Crab = mongoose.model('Crab', CrabSchema);

module.exports = Crab;
