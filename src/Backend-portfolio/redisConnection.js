require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const Redis = require("ioredis");

function createRedisConnection() {
  const connection = process.env.REDIS_URL || "redis://127.0.0.1:6379";
  return new Redis(connection, { maxRetriesPerRequest: null });
}

module.exports = createRedisConnection;
