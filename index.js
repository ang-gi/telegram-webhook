import express from "express";
// import TelegramBot from "telegram-bot-api";

const app = express();
const port = process.env.PORT || 8443;

// const token = "6523839621:AAFw5nE7tCjZM5N0QJ0Ue5LFj5-8e7RAVnQ";
// const bot = new TelegramBot(token);

app.use(express.json()); // Enable JSON body parsing

// Webhook endpoint to handle incoming updates
app.post("/webhook", (req, res) => {
  const update = req.body;

  // Process the update based on its type (message, callback_query, etc.)
  if (update.message) {
    console.log("Received message:", update.message.text);
    // Handle message updates (e.g., send a reply, perform an action)
    // bot.sendMessage(update.message.chat.id, "Hello from your webhook handler!");
  } else if (update.callback_query) {
    console.log("Received callback query:", update.callback_query.data);
    // Handle callback query updates (e.g., process inline buttons, etc.)
  } else {
    console.log("Received update of type:", update.update_type);
    // Handle other update types (optional)
  }

  res.sendStatus(200); // Acknowledge the update
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
