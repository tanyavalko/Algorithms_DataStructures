export function anagrams(stringA: string, stringB: string) {
  const aCharMap = builderCharMap(stringA);
  const bCharMap = builderCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function builderCharMap(str: string) {
  const charMap: { [char: string]: number } = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

export function anagrams2(stringA: string, stringB: string) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str: string) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
