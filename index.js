let http = require("node:http");

const PORT = 8000;

http.createServer((req, res) => {
    console.log(1)
    res.end("deo")
}).listen(PORT, () => {
    console.log(`listening at localhost:${PORT}`)
})