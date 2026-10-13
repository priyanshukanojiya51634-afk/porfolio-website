const { Queue } = require("bullmq");

const requestschema2 = new Queue("requestQueue2", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

module.exports = requestschema2;