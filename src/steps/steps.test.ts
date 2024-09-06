import { steps } from '.';

test('should return an empty string for num = 0', () => {
  const result = steps(0);
  expect(result).toBe('');
});

test('should return a single step for num = 1', () => {
  const result = steps(1);
  expect(result).toBe('#\n');
});

test('should return correct steps for num = 2', () => {
  const result = steps(2);
  expect(result).toBe('# \n##');
});

test('should return correct steps for num = 4', () => {
  const result = steps(4);
  expect(result).toBe('#   \n##  \n### \n####');
});
