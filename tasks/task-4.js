// const sum = (num1, num2) => {
//   let num = num1;
//   let count = 0;
//   let res = [];
//   for (let i = 0; i < num2; i++) {
//     if (res.length < 130) {
//       count += 1;
//       num *= num2;
//       res.push(num);
//     }
//     count += 1;
//   }
//   console.log(count);
//   return res.length === 130 ? count : res.length;
// };

// function comparePowers(n1, n2) {
//   const firstValue = sum(n1[0], n1[1]);
//   const secondValue = sum(n2[0], n2[1]);
//   const firstValueForShortArg = Math.pow(n1[0], n1[1]);
//   const secondValueForShortArg = Math.pow(n2[0], n2[1]);

//   if ((firstValueForShortArg || secondValueForShortArg) === Infinity) {
//     return firstValue > secondValue ? -1 : secondValue > firstValue ? 1 : 0;
//   }
//   console.log("here");
//   return firstValueForShortArg > secondValueForShortArg
//     ? -1
//     : secondValueForShortArg > firstValueForShortArg
//     ? 1
//     : 0;
// }
// console.log(comparePowers([8, 95000000], [10, 9500000]));

const sum = (num1, num2) => {};

function comparePowers(n1, n2) {
  // let firstValue = n1[0].toString() + n1[1].toString();
  // let secondValue = n2[0].toString() + n2[1].toString();

  const firstValueForShortArg = Math.pow(n1[0], n1[1]);
  const secondValueForShortArg = Math.pow(n2[0], n2[1]);

  if ((firstValueForShortArg || secondValueForShortArg) === Infinity) {
  }

  return firstValueForShortArg > secondValueForShortArg
    ? -1
    : +secondValueForShortArg > +firstValueForShortArg
    ? 1
    : 0;
}
// console.log(comparePowers([9, 123], [333, 3]));
