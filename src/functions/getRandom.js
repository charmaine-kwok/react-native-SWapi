const getRandom = (min, max, exclude) => {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;

  if (ranNum === exclude) {
    ranNum = getRandom(min, max, exclude);
  }

  return ranNum;
};

export default getRandom;
