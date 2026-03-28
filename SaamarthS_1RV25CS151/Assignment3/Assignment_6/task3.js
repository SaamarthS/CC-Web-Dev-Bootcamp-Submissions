async function safeDivide(a, b) {
  try {
    const result = await new Promise((resolve, reject) => {
      if (b === 0) {
        reject(new Error("Cannot divide by zero!"));
      } else {
        resolve(a / b);
      }
    });
    console.log("Result:", result);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

safeDivide(10, 2);
safeDivide(10, 0);
