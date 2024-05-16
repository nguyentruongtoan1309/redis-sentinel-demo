const { Redis } = require('ioredis');
const config = require('../configs');

const redisClient = new Redis(
  {
    sentinels: config.redisSentinels.sentinels,
    name: config.redisSentinels.name,
    showFriendlyErrorStack: true,
    db: config.redisSentinels.redisDB,
  },
  { natMap: config.redisSentinels.natMap },
);

redisClient.on('connect', () => {
  console.info('Connect Redis Index successfully');
});

redisClient.on('error', (err) => {
  console.error('Redis index client error', err);
});

module.exports = { redisClient };
