import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import dns from "dns";
dns.promises.setServers(["8.8.8.8", "8.8.4.4"]); // Set DNS servers to Google's public DNS

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
