// Fruit Colour Hex Color Utility
// Get a color based on fruit type

function get1FruitHexColor(fruit) {
  const fruitColor = {
    apple: "#6dccd1",
    kiwi: "#b0d16d",
    lemon: "#c9ac36",
    orange: "#d49659",
    peach: "#e3b1c4",
    pear: "#bf5c80",
    plum: "#945cbf",
    strawberry: "#bf5c5c",
    berry: "#bf5c5c",
    watermelon: "#5cbf68",
    melon: "#5cbf68",
  };

  return fruitColor[fruit];
}

export default get1FruitHexColor;
