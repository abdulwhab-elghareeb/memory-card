export function shuffle(arr) {
  const visited = new Set();
  const shuffled = [];

  while (shuffled.length !== arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (!visited.has(randomIndex)) {
      shuffled.push(arr[randomIndex]);
      visited.add(randomIndex);
    }
  }

  return shuffled;
}
