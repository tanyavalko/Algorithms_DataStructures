export function maxChar(str: string) {
  const charMap: { [char: string]: number } = {};
  let max = 0;
  let maxChar = '';

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
