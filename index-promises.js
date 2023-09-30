const fs = require("node:fs/promises");

async function readFile() {
	try {
		const data = await fs.readFile("file.txt", "utf-8");
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

readFile();

console.log("First");

fs.readFile("file.txt", "utf-8")
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

console.log("Second");
