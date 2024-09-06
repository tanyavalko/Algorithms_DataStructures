import { reverseString1, reverseString2, reverseString3 } from '.';

test('reverse string', () => {
  const result = reverseString1('orange');
  expect(result).toBe('egnaro');
});

test('reverse string 2', () => {
  const result = reverseString2('orange');
  expect(result).toBe('egnaro');
});

test('reverse string 3', () => {
  const result = reverseString3('orange');
  expect(result).toBe('egnaro');
});
