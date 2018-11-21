'use strict';

const admin = require('firebase-admin');

const serviceAccount = require("../../.credentials");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://wordpress-game.firebaseio.com'
});

module.exports = admin;
