import { capitalize } from '.';

test('capitalizes the first letter of each word in a sentence', () => {
  const result = capitalize('a short sentence');
  expect(result).toBe('A short sentence');
});
