let count = 5;

const interval = setInterval(() => {
  console.log(count);
  if (count === 0) {
    clearInterval(interval);
    console.log("Time's up!");
  }
  count--;
}, 1000);
