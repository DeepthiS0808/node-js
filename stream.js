const fs = require("fs");
const readableStream = fs.createReadStream("docs/hugefile.txt","utf-8");
console.log(readableStream);
const writableStream = fs.createWriteStream("docs/hugefile_copy.txt");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
});

readableStream.on("end", () => {
   writableStream.end();
});

readableStream.on("error", (err) => {
    console.log(err.message);
});

writableStream.on("error", (err) => {
    console.log(err.message);
});



