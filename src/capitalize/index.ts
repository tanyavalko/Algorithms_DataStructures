export function capitalize(str: string) {
  return str
    .split(' ')
    .map((item) => item[0].toUpperCase().concat(item.slice(1)))
    .join(' ');
}
