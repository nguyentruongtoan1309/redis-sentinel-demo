const express = require('express');
const app = express();
require('dotenv').config();
const { port } = require('./configs');
const { redisClient } = require('./database/redis');

app.post('/write', async (req, res) => {
  try {
    console.log('Write to redis');
    await redisClient.set(req?.body?.key, JSON.stringify(req?.body?.value));
    res.json({ success: true });
  } catch (error) {
    console.log('create ERROR: ', error)
    res.json({ success: false, message: error?.stack || error?.message });
  }
})

app.get('/read', async (req, res) => {
  try {
    console.log('Read from redis');
    const result = await redisClient.get(req?.query?.key);
    console.log(result);
    res.json({ success: true, data: result });
  } catch (error) {
    console.log('read ERROR: ', error)
    res.json({ success: false, message: error?.stack || error?.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
