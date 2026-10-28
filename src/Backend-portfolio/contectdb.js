const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const queq = require("./queq");
const { body, validationResult } = require("express-validator");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/userrequest",
  [
    body("name").trim().notEmpty(),
    body("email", "Please enter a valid email").isEmail(),
    body("number").isNumeric(),
    body("message").trim().notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Please enter valid data" });
      }

      const { name, number, email, message } = req.body;
      await queq.add("save-request", {
        name,
        email,
        number: Number(number),
        message,
      });

      return res.status(202).json({ message: "Request queued successfully" });
    } catch (error) {
      console.error("Failed to queue request:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
);

app.listen(port, () => {
  console.log("Server listen on 5000");
});
