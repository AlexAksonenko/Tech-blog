const { User } = require('../models');

const userdata = [
  {
    username: 'alexkoly',
    email: 'nolgutge0@plk.ca',
    password: 'password123'
  },
  {
    username: 'jpjgf',
    email: 'knbjkgkh@sknk.com',
    password: 'password123'
  },
  {
    username: '8ygr5',
    email: 'lsd@oki.ua',
    password: 'password123'
  },
  {
    username: 'hfrty',
    email: 'jggy3@gllp.pl',
    password: 'password123'
  },
  {
    username: 'dkolmnb',
    email: 'gdgley4@wer.com',
    password: 'password123'
  },
  {
    username: 'spre5',
    email: 'lnout5@ib.com',
    password: 'password123'
  },
  {
    username: 'gens6',
    email: 'pleton6@ur.com',
    password: 'password123'
  },
  {
    username: 'nniel',
    email: 'rigo7@na.com',
    password: 'password123'
  },
  {
    username: 'bins8',
    email: 'lmoin8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
