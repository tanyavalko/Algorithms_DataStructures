export function steps(num: number): string {
  let stair = '';
  for (let row = 0; row < num; row++) {
    let level = '';
    for (let column = 0; column < num; column++) {
      if (column <= row) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    stair += level.trim() + '\n'; // Append newline character after each row
  }
  console.log(stair);

  return stair;
}

// function steps2(num: number, row: number = 0, stair: string = '') {
//   if (num === row) {
//     return null;
//   }

//   if (num === stair.length) {
//     console.log(stair);
//     return steps2(num, row + 1);
//   }

//   const add = stair.length <= row ? '#' : ' ';
//   steps2(num, row, stair + add);
// }
