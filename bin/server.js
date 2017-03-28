#!/usr/bin/env node

/**
 * Module dependencies.
 */

const express = require('express');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

var cache = []; // Array is OK!
cache[0] = fs.readFileSync( '/Users/fla/Documents/workspace/python/fiware-tempest-rally/result/output.html');

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.send( cache[0] );
});

app.listen(port, function () {
    console.log('\nServer is running at http://' + hostname + ':' + port + '' +
        '\nServer hostname ' + hostname + ' is listening on port ' + port + '!');
});
