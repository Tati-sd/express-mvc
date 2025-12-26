const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");
app.use(express.json());
app.use("/", mainRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
