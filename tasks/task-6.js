function cycle(dir, arr, cur) {
  if (arr.length === 1) return arr[0];
  if (!arr.includes(cur)) {
    console.log("here1");
    return null;
  }
  const findValueLeft = arr.indexOf(cur) - 1;
  if (dir === 1) {
    console.log("here2");
    const findValueRight = arr.indexOf(cur) + 1;
    return arr[findValueRight];
  }
  if (dir === -1 && findValueLeft === -1) {
    console.log("here3");
    return arr[arr.length - 1];
  }
  if (dir === -1 && findValueLeft > -1) {
    console.log("here4");
    return arr[findValueLeft];
  }
}
// console.log(cycle(1, [405], 405));
// тосмай;
