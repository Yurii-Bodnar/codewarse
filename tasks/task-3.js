// You have been speeding on a motorway and a police car had to stop you.
// The policeman is a funny guy that likes to play games.
// Before issuing penalty charge notice he gives you a choice to change your penalty.

// Your penalty charge is a combination of numbers like: speed of your car,
// speed limit in the area, speed of the police car chasing you,
// the number of police cars involved, etc. So,
// your task is to combine the given numbers
// and make the penalty charge to be as small as possible.

// For example,
// if you are given numbers
// [45, 30, 50, 1]
// your best choice is 1304550

// Examples:

// ['45', '30', '50', '1'] => '1304550'

// ['100', '10', '1'] => '100101'

// ['32', '3'] => '323'

function penalty(a_list) {
  return a_list.sort((a, b) => (a + b > b + a ? 1 : -1)).join("");
}
// console.log(penalty(["70", "46", "4", "19"]));

// function getValue(a_list, length) {
//   console.log(length);
//   let smallValue = a_list[0];
//   for (let i = 1; i < a_list.length; i++) {
//     if (smallValue[0] === a_list[i][0]) {
//       for (
//         let j = 1;
//         j <
//         (smallValue.length > a_list[i].length
//           ? smallValue.length
//           : a_list[i].length);
//         j++
//       ) {
//         if (smallValue[j] === a_list[i][j]) {
//           continue;
//         }
//         if (
//           smallValue[j] > a_list[i][j]
//           // || !smallValue[j]
//         ) {
//           smallValue = a_list[i];
//           continue;
//         }
//         if (
//           !a_list[i][j] &&
//           a_list[i][j - 1] < smallValue[j] &&
//           smallValue.length <= 2
//           //   &&
//           //   length < 14
//         ) {
//           smallValue = a_list[i];
//           continue;
//         }
//         if (
//           !smallValue[j] &&
//           (a_list[i][j] < smallValue[j - 1] ||
//             a_list[i][j] === smallValue[j - 1])
//         ) {
//           smallValue = a_list[i];
//         }
//       }
//     }
//     if (smallValue[0] > a_list[i][0] || !smallValue[0]) {
//       smallValue = a_list[i];
//     }
//   }
//   return smallValue;
// }
// function penalty(a_list) {
//   //   console.log(a_list);
//   let arr = [...a_list];
//   let result = [];
//   for (let value of a_list) {
//     let valueForRes = getValue(arr, a_list.join("").length);
//     result.push(...arr.splice(arr.indexOf(valueForRes), 1));
//   }
//   return result.join("");
// }
