require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const { Worker } = require("bullmq");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const requestSchema2 = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Requstp = mongoose.model("Requstp", requestSchema2);

async function startWorker() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Pinformation");
  console.log("Connected to MongoDB Pinformation");

  const worker = new Worker(
    "requestQueue2",
    async (job) => {
      console.log("Processing:", job.id);
      const { name, email, number, message } = job.data;

      await Requstp.create({
        name,
        email,
        number,
        message,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: "New Portfolio Contact Form Submission",
        text: `You received a new contact form submission. Name: ${name}, email: ${email}, number: ${number}, message: ${message}`,
      });
      console.log("Email sent successfully");
      console.log("Completed:", job.id);
    },
    {
      connection: {
        host: "localhost",
        port: 6379,
      },
    },
  );

  worker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
  });

  worker.on("failed", (job, err) => {
    console.error(`Job ${job?.id ?? "unknown"} failed:`, err);
  });

  worker.on("error", (err) => {
    console.error("Worker error:", err);
  });
}

startWorker().catch((err) => {
  console.error("Failed to connect to MongoDB or start worker:", err);
  process.exitCode = 1;
});