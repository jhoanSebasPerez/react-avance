const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

const vapidKeys = {
  publicKey:
    "BNlGtQvmZtj2cg0e_iAEt01i-H3hd2JTF5Ao1uX-IeKQV2IKU8IHe2Um2IwW_WM-_4HRNDklFvHHN58seHx1v5Y",
  privateKey: "GcN4PQ82LRLsTEo_nCKtduk9MulVLdfSXoclEeUEVtE",
};

webpush.setVapidDetails(
  "mailto:jhoansebastianperez73@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const subscribers = [];
const content = {};

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
  const payload = JSON.stringify(content);
  console.log(subscribers[0]);
  await webpush.sendNotification(subscribers[0], payload);
  res.send("Notification sent");
});

app.post("/subscribe", (req, res) => {
  const pushSubscription = req.body;
  subscribers.push(pushSubscription);
  res.sendStatus(200).json();
});

app.post("/notification", (req, res) => {
  const { title, body } = req.body;
  content.title = title;
  content.body = body;
  res.sendStatus(200).json();
});

app.listen(8000, () => {
  console.log("Running on port: 8000");
});
