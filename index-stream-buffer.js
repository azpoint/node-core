const buffer = new Buffer.from("Dude", "utf-8");

buffer.write("pe");
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer);
