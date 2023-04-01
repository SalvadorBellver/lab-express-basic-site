const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) => {
    const filePath = path.join(__dirname, "views", "index.html");
    console.log(`Sending file: $filePath`);
    response.sendFile(filePath);
})

const port = 3000;
app.listen(port, () =>
    console.log(`Listening on port ${port}`)
)