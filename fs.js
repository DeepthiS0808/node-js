const fs = require("fs");
if (!fs.existsSync("docs")) {
   fs.mkdir("docs", (err) => {
       if (err) {
           console.log(err);
       }
       else {
       console.log("Directory created");
   }
});
}
//create a file
///fs.writeFile("deepthi/hello.txt", "Hello World", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("File created");
//     }
// });


// fs.readFile("deepthi/hello.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message);
//     }
//     else {
//         console.log(data);
//     }
// });

// if (fs.existsSync("deepthi/hello.txt")) {
//     fs.unlink("deepthi/hello.txt", (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         else {
//             console.log("File deleted");
//         }
//     });
// }

// if (fs.existsSync("deepthi")) {
//     fs.rmdir("deepthi", (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         else {
//             console.log("Directory deleted");
//         }
//     });
// }