import { maxChar } from '.';

test('find max char', () => {
  const result = maxChar('abcccccccd');
  const result2 = maxChar('apple 1231111');

  expect(result).toBe('c');
  expect(result2).toBe('1');
});
