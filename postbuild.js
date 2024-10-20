const fs = require('fs');

const src = './404.html';
const dest = './dist/user/404.html';

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('Error while copying 404.html:', err);
  } else {
    console.log('Successfully copied 404.html to /dist/user/');
  }
});
