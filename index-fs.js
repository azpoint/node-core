const { error } = require("node:console");
const fs = require("node:fs");

const fileContent = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContent);

fs.readFile("./file.txt", "utf-8", (error, data) => {
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});

fs.writeFileSync("./greet.txt", "Hello World!!");

fs.writeFile("./greet.txt", " Hello Pepe", { flag: "a" }, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("File Written");
	}
});
