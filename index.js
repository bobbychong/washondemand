var app = require('./server/server.js');

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Express server listening on %d in %s mode', port, app.settings.env);
