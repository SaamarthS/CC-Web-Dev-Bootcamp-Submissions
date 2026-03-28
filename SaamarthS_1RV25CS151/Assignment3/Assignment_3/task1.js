function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log("Result:", divide(10, 2));
} catch (e) {
  console.log("Error:", e.message);
}

try {
  console.log("Result:", divide(10, 0));
} catch (e) {
  console.log("Error:", e.message);
}
