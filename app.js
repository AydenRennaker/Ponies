var request = require('request');
var config = require('./config');
var Query = require('./query');



var q = new Query(config);
q.getWorkers();
q.getHistory();
