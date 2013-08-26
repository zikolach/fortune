var connect = require('connect');

var app = connect()
	.use(connect.compress())
	.use(connect.static(__dirname));

app.listen(process.argv[2] || 5000);
