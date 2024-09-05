export function reverseString1(str: string): string {
  return str.split('').reverse().join('');
}

export function reverseString2(str: string): string {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

export function reverseString3(str: string): string {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}
