const express = require('express');
const cors = require('cors');
// const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// app.post("/form", (req, res) => {
//   const data = JSON.stringify(req.body);

//   // Write the JSON data into the file
//   fs.writeFile('data.json', data, (err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error writing data to file');
//     } else {
//       console.log('Data saved to file');
//       res.send('Data saved successfully');
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
