const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log('Now listening on PORT ' + PORT)
})