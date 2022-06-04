const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Server response');
})

app.listen(8000);