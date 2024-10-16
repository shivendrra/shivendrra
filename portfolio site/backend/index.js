const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));

const BLOGS_PATH = path.join(__dirname, 'blogs');

app.get('/api/blogs/:name', (req, res) => {
  const blogName = req.params.name;
  const filePath = path.join(BLOGS_PATH, `${blogName}.txt`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Blog not found:', filePath);
      return res.status(404).json({ error: 'Blog not found!' });
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading blog:', err);
        return res.status(500).json({ error: 'Error reading the blog!' });
      }
      res.json({ content: data });
    });
  });
});

// Proxy React routes to the development server
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
