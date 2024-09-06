import { reverseInt1 } from '.';

test('reverse int', () => {
  const result = reverseInt1(51);
  expect(result).toBe(15);

  const result2 = reverseInt1(355);
  expect(result2).toBe(553);

  const result3 = reverseInt1(500);
  expect(result3).toBe(5);

  const result4 = reverseInt1(-90);
  expect(result4).toBe(-9);
});
