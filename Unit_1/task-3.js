function getElementWidth(content, padding, border) {
  const paddingFloat = parseFloat(padding);
  const contentFloat = parseFloat(content);
  const borderFloat = parseFloat(border);

  return contentFloat + paddingFloat * 2 + borderFloat * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
