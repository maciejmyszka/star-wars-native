export const getShourcut = (word: string) => {
  const wordArr = word.split(' ');

  if (wordArr.length === 1) {
    return `${wordArr[0].charAt(0)}${wordArr[0].charAt(1)}`.toUpperCase();
  } else {
    return `${wordArr[0].charAt(0)}${wordArr[1].charAt(0)}`.toUpperCase();
  }
};
