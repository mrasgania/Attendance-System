import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import loginRouter from "./routes/login.js";
import adminRouter from "./routes/admin.js";
import recordRouter from "./routes/record.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.get("/", function (req, res) {
  res.send("Hello");
});
app.use("/", loginRouter);
app.use("/admin", adminRouter);
app.use("/viewRecord", recordRouter)
const PORT = process.env.PORT || 5000;
app.set("PORT", PORT);
const CONNECTION_URL =
  "mongodb+srv://na20b036:e5nkLG6epFyCBbmx@cluster0.8nri2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
