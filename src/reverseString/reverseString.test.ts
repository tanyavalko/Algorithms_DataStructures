import { reverseString1, reverseString2, reverseString3 } from '.';

test('reverse string', () => {
  const result = reverseString1('orange');
  expect(result).toEqual('egnaro');
});

test('reverse string', () => {
  const result = reverseString2('orange');
  expect(result).toEqual('egnaro');
});

test('reverse string', () => {
  const result = reverseString3('orange');
  expect(result).toEqual('egnaro');
});
