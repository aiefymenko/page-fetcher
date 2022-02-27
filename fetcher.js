const request = require('request');
const fs = require('fs');

const host = process.argv[2];
const whereToWrite = process.argv[3];

request(host, (error, response, body) => {
  if (error) {
    console.log('error:', error);  // Print the error if one occurred
  }
  fs.writeFile (whereToWrite, body, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${whereToWrite} `);
  }
  });
});