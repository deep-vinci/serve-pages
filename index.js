let http = require("node:http");
let fs = require("node:fs");

const PORT = 8000;

http.createServer((req, res) => {
    let path = req.url == "/" ? "index" : req.url;

    fs.readFile(`pages/${path}.html`, (err, data) => {
        if (err) {
            console.error(err)
        }
        res.end(data);
    })
}).listen(PORT, () => {
    console.log(`listening at localhost:${PORT}`)
})