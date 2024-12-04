require("dotenv").config();
const express = require("express");
const cors = require("cors");
const invRoutes = require("./routes/inventory");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", invRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
