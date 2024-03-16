// Transform price to a rounded numerical value (for charts)
// Ex. "€250.99" to 251

export default function euroPricesToNum(euroPriceArr) {
  return euroPriceArr.map((euroPrice) => {
    // Remove € symbol
    const number = euroPrice.replace("€", "");
    return Math.round(number);
  });
}
