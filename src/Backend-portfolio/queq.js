const { Queue } = require("bullmq");

const requestschema = new Queue("requestQueue", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

module.exports = requestschema;
