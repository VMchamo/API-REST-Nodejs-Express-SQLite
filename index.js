const express =  require('express');
const app = express();
const sequelize = require('./database');
const User = require('./models/user');

sequelize.sync( { force: true }).then(() => console.log('db is ready'));

app.use(express.json());

// Routes

app.post('/users', async (req, res) => {
    await User.create(req.body);
    res.send('User created')
});


app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

app.get('/users/:id', async (req, res) => {
    const requestedId = req.params.id;
    const user = await User.findOne({ where: { id: requestedId}});
    res.send(user);
});

app.put('/users/:id', async (req, res) => {
    const requestedId = req.params.id;
    const user = await User.findOne({ where: { id: requestedId}});
    user.name = req.body.name;
    await user.save();
    res.send('updated');
});

app.delete('/users/:id', async (req, res) => {
    const requestedId = req.params.id;
    await User.destroy({ where: { id: requestedId}});
    res.send('removed');
});



app.listen(3000, () => {
    console.log('listening on port 3000');
});