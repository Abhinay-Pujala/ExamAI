import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import dns from "dns";
dns.promises.setServers(["8.8.8.8", "8.8.4.4"]); // Set DNS servers to Google's public DNS

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
