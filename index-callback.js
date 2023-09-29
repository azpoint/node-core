function greet(name) {
	console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
	const name = "Dude";
	callback(name);
}

higherOrderFunction(greet);
