const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

console.info("\x1b[36m%s\x1b[0m", "\nRunning in http://localhost:5000");
app.listen(5000);
