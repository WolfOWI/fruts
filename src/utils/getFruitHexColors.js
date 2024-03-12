// Fruit Colors Hex Color Utility
// Get an array of 5 color based on fruit type

function getFruitHexColors(fruit) {
  const fruitColor = {
    apple: ["#6ccbd0", "#6adac7", "#7be6b6", "#9cf09f", "#c8f688"],
    kiwi: ["#84cc16", "#36c055", "#00b17a", "#009f90", "#008a94"],
    lemon: ["#e8e041", "#b6d33c", "#85c43f", "#54b447", "#00a34f"],
    orange: ["#ce5e0e", "#dc7e03", "#e69d00", "#edbd0e", "#f1dd27"],
    peach: ["#ed87b0", "#dd7ebb", "#c778c7", "#a975d0", "#8375d7"],
    pear: ["#bd2e62", "#d84256", "#eb5d45", "#f57d2f", "#f59f0a"],
    plum: ["#935abf", "#746aca", "#5376cc", "#2e80c7", "#0087bd"],
    strawberry: ["#ef4444", "#9f000e", "#e19990", "#5a9300", "#225f00"],
    berry: ["#ef4444", "#9f000e", "#e19990", "#5a9300", "#225f00"], // Alternative name (strawberry)
    watermelon: ["#5abf66", "#a0ca61", "#25502a", "#ff776f", "#C93C3C"],
    melon: ["#5abf66", "#a0ca61", "#25502a", "#ff776f", "#C93C3C"], // Alternative name (watermelon)
  };

  return fruitColor[fruit];
}

export default getFruitHexColors;
