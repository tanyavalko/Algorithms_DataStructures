import { chunk, chunk2, chunk3 } from '.';

test('chunk', () => {
  const result = chunk([1, 2, 3, 4], 2);
  const result2 = chunk([1, 2, 3, 4, 5, 6], 4);
  const result3 = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(result2).toEqual([
    [1, 2, 3, 4],
    [5, 6],
  ]);
  expect(result3).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

test('chunk2', () => {
  const result = chunk2([1, 2, 3, 4], 2);
  const result2 = chunk2([1, 2, 3, 4, 5, 6], 4);
  const result3 = chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(result2).toEqual([
    [1, 2, 3, 4],
    [5, 6],
  ]);
  expect(result3).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});

test('chunk3', () => {
  const result = chunk3([1, 2, 3, 4], 2);
  const result2 = chunk3([1, 2, 3, 4, 5, 6], 4);
  const result3 = chunk3([1, 2, 3, 4, 5, 6, 7, 8], 3);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(result2).toEqual([
    [1, 2, 3, 4],
    [5, 6],
  ]);
  expect(result3).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);
});
