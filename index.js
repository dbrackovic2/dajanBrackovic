const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send('Dajan Brackovic <3 Belma Masic'));

app.listen(port, () => console.log(`Nice web app listening on port ${port}!`));