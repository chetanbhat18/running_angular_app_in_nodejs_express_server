const express = require('express');
const path = require('path');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/testone_dist_folder/'));

app.get('/*', function( req, res){
    res.sendFile(path.join(__dirname));
}
);

const server = http.createServer(app);

app.listen(PORT, function(){
    console.log("server is running on localhost: "+PORT);
}
);