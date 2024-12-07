const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
const person = { name: 'John', age: 30, city: 'New York' };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  for (let i = 5; i >= 1; i--) {
    await delay(1000); // Wait for 1 second
    console.log(`Number: ${i}`);
  }
})();
