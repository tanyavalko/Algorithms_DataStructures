import { palindrome1, palindrome2 } from '.';

test('get palindrome', () => {
  const result = palindrome1('orange');
  expect(result).toBe(false);

  const result2 = palindrome1('abba');
  expect(result2).toBe(true);
});

test('reverse string', () => {
  const result = palindrome2('orange');
  expect(result).toBe(false);

  const result2 = palindrome1('abba');
  expect(result2).toBe(true);
});
