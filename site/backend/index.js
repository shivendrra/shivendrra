const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://shivendrra.vercel.app',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/site/backend/blogs';

app.get('/api/blogs/:name', async (req, res) => {
  const blogName = req.params.name;
  const fileUrl = `${GITHUB_BASE_URL}/${blogName}.txt`;

  try {
    const response = await axios.get(fileUrl);
    res.json({ content: response.data });
  } catch (err) {
    console.error('Error fetching blog:', err);
    return res.status(404).json({ error: 'Blog not found!' });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

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