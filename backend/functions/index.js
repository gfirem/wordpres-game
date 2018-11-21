'use strict';

const fulfillmentEntryPoint = require('./entrypoints/dialogflow');
const frontendEntryPoint = require('./entrypoints/frontend');

module.exports.dialogflowFirebaseFulfillment = fulfillmentEntryPoint;
module.exports.frontend = frontendEntryPoint;
