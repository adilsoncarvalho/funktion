'use strict';

const express = require('express');
const app = express();
const gcf = require('./index');

const PORT = process.env.PORT || 5000;
const URI = 'http://localhost:' + PORT + '/';

//
// Mounting all functions in gcf using its names as their mountpoints
//
for(let functionName of Object.keys(gcf)) {
  app.use('/' + functionName, gcf[functionName]);
}

//
// The actual webserver
//
app.listen(PORT, () => {
  console.log("GCF Poor's Man Emulator");
  console.log();
  console.log("Available functions:");

  //
  // Listing all available endpoints
  //
  for(let func of Object.keys(gcf)) {
    console.log('  - ' + func + ' at ' + URI + func);
  }
});
