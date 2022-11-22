const { User } = require('../models');

const userData = [
    {
        username: 'jeffreyp123',
        password: 'password',
        email: 'jp@email.com'
    },
    {
        username: 'sams123',
        password: 'password',
        email: 'ss@email.com'
    },
    {
        username: 'nimeasht123',
        password: 'password',
        email: 'nt@email.com'
    },
    {
        username: 'cheet123',
        password: 'password',
        email: 'ct@email.com'
    },
    {
        username: 'ignaciog123',
        password: 'password',
        email: 'ig@email.com'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;