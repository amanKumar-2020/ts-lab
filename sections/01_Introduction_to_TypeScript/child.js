process.on("message", (msg) => {
  console.log("Received:", msg);

  process.send("Hello Parent!");
});
