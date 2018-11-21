'use strict';

const app = require('./app');
const functions = require('firebase-functions');

module.exports = functions.https.onRequest(app);
