const dbConfig = {
  redisSentinels: {
    natMap: {
      [`${process.env.REDIS_MASTER_HOST_PORT_DOCKER}`]: {
        // Docker IP and internal port of redis-primary
        host: process.env.REDIS_MASTER_MACHINE_HOST,
        port: parseInt(process.env.REDIS_MASTER_MACHINE_PORT), // Exposed port in docker-compose
      },
      [`${process.env.REDIS_SLAVE_HOST_PORT_DOCKER_1}`]: {
        // Docker IP and internal port of redis-replica 1
        host: process.env.REDIS_SLAVE_MACHINE_HOST_1,
        port: parseInt(process.env.REDIS_SLAVE_MACHINE_PORT_1), // Exposed port in docker-compose
      },
      [`${process.env.REDIS_SLAVE_HOST_PORT_DOCKER_2}`]: {
        // Docker IP and internal port of redis-replica 2
        host: process.env.REDIS_SLAVE_MACHINE_HOST_2,
        port: parseInt(process.env.REDIS_SLAVE_MACHINE_PORT_2), // Exposed port in docker-compose
      },
      // Docker IP of Sentinel 1
      [`${process.env.REDIS_SENTINEL_HOST_PORT_DOCKER_1}`]: {
        host: process.env.REDIS_SENTINEL_HOST_1,
        port: parseInt(process.env.REDIS_SENTINEL_PORT_1), // Exposed port in docker-compose
      },
      // Docker IP of Sentinel 2
      [`${process.env.REDIS_SENTINEL_HOST_PORT_DOCKER_2}`]: {
        host: process.env.REDIS_SENTINEL_HOST_2,
        port: parseInt(process.env.REDIS_SENTINEL_PORT_2), // Exposed port in docker-compose
      },
      // Docker IP of Sentinel 3
      [`${process.env.REDIS_SENTINEL_HOST_PORT_DOCKER_3}`]: {
        host: process.env.REDIS_SENTINEL_HOST_3,
        port: parseInt(process.env.REDIS_SENTINEL_PORT_3), // Exposed port in docker-compose
      },
    },
    sentinels: [
      { host: process.env.REDIS_SENTINEL_HOST_1, port: parseInt(process.env.REDIS_SENTINEL_PORT_1) },
      { host: process.env.REDIS_SENTINEL_HOST_2, port: parseInt(process.env.REDIS_SENTINEL_PORT_2) },
      { host: process.env.REDIS_SENTINEL_HOST_3, port: parseInt(process.env.REDIS_SENTINEL_PORT_3) },
    ],
    name: process.env.REDIS_MASTER_NAME || 'mymaster',
    redisDB: parseInt(process.env.REDIS_DB, 10) || 0,
  },
};

module.exports = dbConfig;
