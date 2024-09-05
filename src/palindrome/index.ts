export function palindrome1(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

export function palindrome2(str: string): boolean {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}
