require("dotenv").config();
const express = require("express");
const invRoutes = require("./routes/inventory");

const app = express();
app.use(express.json());
app.use("/api", invRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
