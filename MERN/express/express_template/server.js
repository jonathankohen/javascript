const express = require('express');
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For example, by invoking app.get, we're saying we want to handle GET requests at this particular route ("/api"). The second argument passed to the get method is the callback function we want to run when a browser makes a request to this route.
app.get('/api', (req, res) => {
    res.send('Yoni was here');
});

const server = app.listen(8000, () =>
    console.log(`Listening on port ${server.address().port}...`),
);

// GET DATA
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: 'Reimu', lastName: 'Hakurei' },
    { firstName: 'Marisa', lastName: 'Kirisame' },
    { firstName: 'Sanae', lastName: 'Kochiya' },
    { firstName: 'Sakuya', lastName: 'Izayoi' },
    { firstName: 'Momiji', lastName: 'Inubashiri' },
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST DATA
app.post('/api/users', (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body); // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body); // we always need to respond with something
    res.json({ status: 'ok' });
});

// GETTING DATA FROM A URL
// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});

// UPDATE DATA
app.put('/api/users/:id', (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: 'ok' });
});

app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json({ status: 'ok' });
});
