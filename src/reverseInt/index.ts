export function reverseInt1(num: number): number {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}
