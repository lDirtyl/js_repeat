function getShippingCost(country) {
  const ChinaPrice = 100;
  const ChilePrice = 250;
  const AustraliaPrice = 170;
  const JamaicaPrice = 120;

  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${ChinaPrice} credits`;
      break;
    case "Chile":
      return `Shipping to ${country} will cost ${ChilePrice} credits`;
      break;
    case "Australia":
      return `Shipping to ${country} will cost ${AustraliaPrice} credits`;
      break;
    case "Jamaica":
      return `Shipping to ${country} will cost ${JamaicaPrice} credits`;
      break;
    default:
      return "Sorry, there is no delivery to your country";
      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
