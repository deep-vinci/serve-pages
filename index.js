let http = require("node:http");
let fs = require("node:fs");

const PORT = 8000;

http.createServer((req, res) => {
    let path = req.url == "/" ? "index" : req.url.substring(1);
    let realPath = ["index", "about", "contact-me", "404"].includes(path);
    let fullPath = `pages/${path}`;

    if (realPath) {
        fullPath = `pages/${path}.html`
    }
    fs.readFile(fullPath, (err, data) => {
        res.end(data);
    })
}).listen(PORT, () => {
    console.log(`listening at localhost:${PORT}`)
})