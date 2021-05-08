const a = [..."abcdef"];
console.log(a);
for (let i = a.length - 1; i >= Math.abs(a.length / 2); i--) {
  let temp = a[i];
  a[i] = a[a.length - i - 1];
  a[a.length - i - 1] = temp;
}
console.log(a);
