const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Node App is running successfully and it is hosted on the PORT!");
});

const PORT = 9000;

app.listen(PORT, () => {
	console.log(`Welcome Server running on port ${PORT}`);
});
