const ThingController = require('../controllers/thing.controllers');

module.exports = (app) => {
    app.get('/api/things', ThingController.index);
    app.post('/api/create/thing', ThingController.create);
    app.get('/api/thing/:id', ThingController.show);
    app.put('/api/update/thing/:id', ThingController.update);
    app.delete('/api/destroy/thing/:id', ThingController.destroy);
};
