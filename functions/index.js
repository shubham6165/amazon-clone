const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51KC5EeSGsJOJ1KyG3SPhuRlGoP0NDUn5cEQqTU0RRX7bwsMGxoOs2HdiGkufp0ykf2hlBBXoxB7oV5n8ek67208400OR6tLYpi"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hell0 World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment Request Received for this amout >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
    payment_method_types: ["card"],
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/by-shubham/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
