const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/blogContent', (req, res) => {
  const filePath = path.join(__dirname, 'blogs', 'after_a_fall.txt');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading the file');
    }
    res.send(data);
  });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});