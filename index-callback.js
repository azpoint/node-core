function greet(name) {
	console.log(`Hello ${name}`);
}

function greetDude(greetFn) {
	const name = "Dude";
	greetFn(name);
}

greetDude(greet);
