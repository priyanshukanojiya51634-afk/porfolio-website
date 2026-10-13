const { Queue } = require("bullmq");

const requestschema3 = new Queue("requestQueue3", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

module.exports = requestschema3;