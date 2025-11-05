const fibonacci = n => {
  if (n < 0) throw new RangeError("solo números enteros >= 0");
  let [a, b] = [0, 1];
  while (n--) [a, b] = [b, a + b];
  return a;
};

export{
  fibonacci
}

