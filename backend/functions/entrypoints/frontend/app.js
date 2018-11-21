'use strict';

const express = require('express');
const expressSanitizer = require('express-sanitizer');
const questions = require('../../data/questions');

const admin = require('firebase-admin');

const serviceAccount = require("../../../.credentials");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://wordpress-game.firebaseio.com'
});

const messaging = admin.messaging();

const app = express();

app.use(expressSanitizer());

app.get('/', (request, response) => {
  console.log('Frontend Request headers: ' + JSON.stringify(request.headers));
  console.log('Frontend Request body: ' + JSON.stringify(request.body));

  // This registration token comes from the client FCM SDKs.
  var registrationToken = 'fXR_Xi9Z9og:APA91bGqpGbyd1YfWhcQiiFQueRRF5yCaGbFVeP9yMCJOjM_0662ngoyKjoyrpTdrE4wTKVexqBHhkmjIOkrkdVioAgPsGJ5crGoBnrM960a2CeSkgfUWtpXiJtZ3XNV-y3rLeTPB1xi';

// See documentation on defining a message payload.
  var data = JSON.stringify([
    {name:'user1', score:'10'},
    {name:'user3', score:'10'},
    {name:'user2', score:'10'},
    {name:'user3', score:'10'},
    {name:'user5', score:'10'}
  ]);
  var message = {
    data: {
      winners: data
    },
    token: registrationToken
  };

// Send a message to the device corresponding to the provided
// registration token.
  admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    return true;
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });


  response.status(200).send(questions[0].question);
});

module.exports = app;
