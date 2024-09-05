export function chunk(array: Array<number>, size: number) {
  const newArr = [];

  while (array.length > 0) {
    newArr.push(array.splice(0, size));
  }

  return newArr;
}

export function chunk2(array: Array<number>, size: number) {
  const newArr: Array<number>[] = [];

  for (let element of array) {
    const lastEl = newArr[newArr.length - 1];

    if (!lastEl || lastEl.length === size) {
      newArr.push([element]);
    } else {
      lastEl.push(element);
    }
  }

  return newArr;
}

export function chunk3(array: Array<number>, size: number) {
  const newArr: Array<number>[] = [];
  let index: number = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }

  return newArr;
}
