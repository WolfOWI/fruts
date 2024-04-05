// UTILITY FUNCTION:
// ----------------------------------
// Transform price to a rounded numerical value (for charts usage)
// Ex. "€250.99" to 251

export default function euroPricesToNum(euroPriceArr) {
  return euroPriceArr.map((euroPrice) => {
    // Remove € symbol
    const number = euroPrice.replace("€", "");
    // Return rounded number
    return Math.round(number);
  });
}
// ----------------------------------
