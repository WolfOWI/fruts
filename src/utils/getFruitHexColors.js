// UTILITY FUNCTION:
// ----------------------------------
// Get an array of 5 x HEX CODES (colours) based on fruit type (for graph use)
// Example: ["#6ccbd0", "#6adac7", "#7be6b6", "#9cf09f", "#c8f688"]

function getFruitHexColors(fruit) {
  const fruitColor = {
    apple: ["#6ccbd0", "#6adac7", "#7be6b6", "#9cf09f", "#c8f688"],
    kiwi: ["#b0d16d", "#36c055", "#00b17a", "#009f90", "#008a94"],
    lemon: ["#e8e041", "#c9ac36", "#b6d33c", "#85c43f", "#54b447"],
    orange: ["#dc7e03", "#e69d00", "#ce5e0e", "#d49659", "#edbd0e"],
    peach: ["#e3b1c4", "#dd7ebb", "#c778c7", "#a975d0", "#8375d7"],
    pear: ["#bf5c80", "#d84256", "#eb5d45", "#f57d2f", "#f59f0a"],
    plum: ["#945cbf", "#746aca", "#5376cc", "#2e80c7", "#0087bd"],
    strawberry: ["#ef4444", "#9f000e", "#bf5c5c", "#5a9300", "#8BDB70"],
    berry: ["#ef4444", "#9f000e", "#bf5c5c", "#5a9300", "#8BDB70"], // Alternative name (strawberry)
    watermelon: ["#5abf66", "#a0ca61", "#25502a", "#6e0c0c", "#C93C3C"],
    melon: ["#5abf66", "#a0ca61", "#25502a", "#6e0c0c", "#C93C3C"], // Alternative name (watermelon)
  };

  return fruitColor[fruit];
}
// ----------------------------------

export default getFruitHexColors;
