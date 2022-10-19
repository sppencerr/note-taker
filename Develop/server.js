const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/routes');

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(express.json());
app.use('/', routes);

app.listen(PORT, function() {
    console.log(`Running on port ${PORT}`);
});


