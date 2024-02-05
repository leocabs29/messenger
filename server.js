const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let messages = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post('/messages', (req, res) => {
  const { user, message } = req.body;
  if (user && message) {
    const newMessage = { user, message, timestamp: new Date() };
    messages.push(newMessage);
    res.json(newMessage);
  } else {
    res.status(400).send('Invalid request');
  }
});

app.delete('/clear-messages', (req, res) => {
    // Clear the messages array
    messages = [];
    res.send('Messages cleared');
});


// The catch-all route should be placed at the end
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
