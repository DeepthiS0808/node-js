const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("Hello World");
    }
    else if (req.url === "/contact") {
        res.end("Contact page");
    }
    else if (req.url === "/about") {
        res.end("About page");
    }
    else {
        res.end("Page not found");
    }
});

server.listen(3001, () => {
    console.log("Server started on the port 3001");
});