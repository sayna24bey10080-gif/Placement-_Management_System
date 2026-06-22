const app = require("./src/app");
const connectDB = require("./src/config/db");
require("dotenv").config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running smoothly on port ${PORT}`);
});