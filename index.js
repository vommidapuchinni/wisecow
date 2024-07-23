const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 4499;

app.get('/', (req, res) => {
  exec('/usr/games/fortune | /usr/games/cowsay', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).send(`<pre>Server error: ${error.message}</pre>`);
      return;
    }
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Wisdom server listening at http://localhost:${port}`);
});
