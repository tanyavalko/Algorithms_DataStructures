import { anagrams, anagrams2 } from '.';

test('anagrams', () => {
  const result = anagrams('rail safety', 'fairy tales');
  const result2 = anagrams('RAIL! SAFETY!', 'fairy tales');
  const result3 = anagrams('Hi there', 'Bye there');

  expect(result).toEqual(true);
  expect(result2).toEqual(true);
  expect(result3).toEqual(false);
});

test('anagrams2', () => {
  const result = anagrams2('rail safety', 'fairy tales');
  const result2 = anagrams2('RAIL! SAFETY!', 'fairy tales');
  const result3 = anagrams2('Hi there', 'Bye there');

  expect(result).toEqual(true);
  expect(result2).toEqual(true);
  expect(result3).toEqual(false);
});
