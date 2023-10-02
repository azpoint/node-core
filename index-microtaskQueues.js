process.nextTick(() => console.log("This is process.nextTick 1"))
process.nextTick(() => {
	console.log("this is process.nextTick 2")
	process.nextTick(() => console.log("This is the iner tick inside the second tick"))
})
process.nextTick(() => console.log("This is process.nextTick 3"))

Promise.resolve().then(() => console.log("This is promise resolve 1"))
Promise.resolve().then(() =>{
	console.log("This is promise resolve 2")
	process.nextTick(() => console.log("this is the inner next tick inside promise then block"))
})

Promise.resolve().then(() => console.log("This is promise resolve 3"))


// Promise.resolve().then(() => console.log("This is promise resolve 1"))
// process.nextTick(() => console.log("This is process.nextTick 1"))

// console.log("Console.log 1")
// process.nextTick(() => console.log("this is process.next 1"))
// console.log("Console.log 2")