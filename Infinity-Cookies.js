function main() {
  try {
    Game.cookies = Infinity
    console.log("Made By Syxfer");
    alert("Made By Syxfer")
    // Be careful! Calling main() inside main() will cause an infinite loop
    // and eventually crash your program due to stack overflow.
    // If you intended to call it only once, remove this line:
    // main();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
