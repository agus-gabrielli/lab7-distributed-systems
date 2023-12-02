import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import orders from "./routes/orders.mjs";

const PORT = process.env.PORT || 8081;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /orders routes
app.use("/orders", orders);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
