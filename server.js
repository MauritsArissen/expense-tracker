const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log("Server is online"));

exports.stop = () => {
    console.log('Stopping server...');
    server.close(() => {
        console.log('Server stopped!');
        process.exit(0);
    })
}

if (require.main === module) {
    process.on('SIGINT', this.stop);
    process.on('SIGTERM', this.stop);
}