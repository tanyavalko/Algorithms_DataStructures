import { palindrome1, palindrome2 } from '.';

test('get palindrome', () => {
  const result = palindrome1('orange');
  expect(result).toEqual(false);

  const result2 = palindrome1('abba');
  expect(result2).toEqual(true);
});

test('reverse string', () => {
  const result = palindrome2('orange');
  expect(result).toEqual(false);

  const result2 = palindrome1('abba');
  expect(result2).toEqual(true);
});
