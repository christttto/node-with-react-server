const express = require('express');
const app = express();
//we might have several different of these things
//though it is usually just one

app.get('/', (req, res) =>{
    res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);