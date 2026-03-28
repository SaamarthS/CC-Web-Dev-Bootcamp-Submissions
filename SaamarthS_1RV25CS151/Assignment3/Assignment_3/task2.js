try {
  JSON.parse("not a number");
} catch (e) {
  console.log("Invalid JSON!");
} finally {
  console.log("Parsing attempt done.");
}
