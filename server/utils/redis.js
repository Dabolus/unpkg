const redis = require("redis");

redis.debug_mode = process.env.DEBUG_REDIS != null;

const redisURL =
  process.env.OPENREDIS_URL ||
  process.env.REDIS_URL ||
  "redis://localhost:6379";

const client = redis.createClient(redisURL);

module.exports = client;
