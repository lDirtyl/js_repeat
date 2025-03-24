function getElementWidth(content, padding, border) {
  const contentParse = parseFloat(content);
  const paddingParse = parseFloat(padding);
  const borderParse = parseFloat(border);

  return contentParse + paddingParse * 2 + borderParse * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
