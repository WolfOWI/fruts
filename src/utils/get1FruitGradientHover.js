// Fruit Gradient Utility (FOR HOVERING)
// Get a gradient based on: 1) single fruit type, 2) angle of gradient

const fruitGradient = {
  apple: "from-[#6ccbd0] to-[#c8f688]",
  kiwi: "from-[#b0d16d] to-[#008a94]",
  lemon: "from-[#e8e041] to-[#c9ac36]",
  orange: "from-[#dc7e03] to-[#edbd0e]",
  peach: "from-[#e3b1c4] to-[#a975d0]",
  pear: "from-[#bf5c80] to-[#f59f0a]",
  plum: "from-[#945cbf] to-[#5376cc]",
  strawberry: "from-[#ef4444] to-[#bf5c5c]",
  berry: "from-[#ef4444] to-[#bf5c5c]",
  watermelon: "from-[#5abf66] to-[#a0ca61]",
  melon: "from-[#5abf66] to-[#a0ca61]",
};

const gradientAngle = {
  vertical: "hover:bg-gradient-to-b",
  horisontal: "hover:bg-gradient-to-r",
  diagonal: "hover:bg-gradient-to-br",
};

function get1FruitGradient(fruit, angle) {
  return gradientAngle[angle] + " " + fruitGradient[fruit];
}

export default get1FruitGradient;
