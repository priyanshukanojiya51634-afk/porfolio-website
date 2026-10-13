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

const requestSchema3 = mongoose.Schema({
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

const Requesti = mongoose.model("Requesti", requestSchema3);

async function startWorker() {
  await mongoose.connect("mongodb://127.0.0.1:27017/internshipinfo");
  console.log("Connected to MongoDB internshipinfo");

  const worker3 = new Worker(
    "requestQueue3",
    async (job) => {
      console.log("Processing:", job.id);
      const { name, email, number, message } = job.data;

      await Requesti.create({
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

  worker3.on("completed", (job) => {
    console.log(`Job ${job.id} completed`);
  });

  worker3.on("failed", (job, err) => {
    console.error(`Job ${job?.id ?? "unknown"} failed:`, err);
  });

  worker3.on("error", (err) => {
    console.error("Worker error:", err);
  });
}

startWorker().catch((err) => {
  console.error("Failed to connect to MongoDB or start worker:", err);
  process.exitCode = 1;
});
