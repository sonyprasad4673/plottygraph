const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/graphy-demo'));
app.get('/*', function(_req, res)

    { res.sendFile(path.join(__dirname + '/dist/graphy-demo')); });

app.listen(process.env.PORT || 8000);