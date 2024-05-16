const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("hello", (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit("hello", "Carlos");

myEmitter.on("goodbye", (name) => {
  console.log(`Goodbye, ${name}!`);
});

myEmitter.emit("goodbye", "Carlos");
