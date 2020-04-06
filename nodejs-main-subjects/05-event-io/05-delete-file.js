/*

*/
const fs = require('fs');
fs.unlink('demo.txt', (error) => {
  if(error)
    throw error;
  console.log('File had deleted');
});
