const prices = [100, 200, 300];
const doubled = prices.map(p => p * 2);
const total = prices.reduce((sum, p) => sum + p, 0);
console.log(doubled, total);
