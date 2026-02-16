require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/Database/db');

const startServer = async () => {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    } catch (error) {
        console.error("Failed to connect to database:", error.message);
        process.exit(1);
    }
}

startServer();