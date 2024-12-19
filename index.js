const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");
const eventRoute = require("./route/eventRoute");
const sessionRoute = require("./route/sessionRoute");

const PORT = process.env.PORT || 3400;
connectDb();
app.use(cors()); 

app.use(bodyParser.json());
app.use(express.json());
app.use("/events", eventRoute); 
app.use("/sessions",sessionRoute);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));


