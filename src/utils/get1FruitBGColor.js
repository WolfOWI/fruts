// Fruit Colour BG Utility
// Get a BG color based on fruit type

function get1FruitBGColor(fruit) {
  const fruitColor = {
    apple: "bg-[#6dccd1]",
    kiwi: "bg-[#b0d16d]",
    lemon: "bg-[#c9ac36]",
    orange: "bg-[#d49659]",
    peach: "bg-[#e3b1c4]",
    pear: "bg-[#bf5c80]",
    plum: "bg-[#945cbf]",
    strawberry: "bg-[#bf5c5c]",
    berry: "bg-[#bf5c5c]",
    watermelon: "bg-[#5cbf68]",
    melon: "bg-[#5cbf68]",
  };

  return fruitColor[fruit];
}

export default get1FruitBGColor;
