// Fruit Gradient Utility (FOR HOVERING)
// Get a gradient based on: 1) single fruit type, 2) angle of gradient

const fruitGradient = {
  apple: "from-cyan-200 to-indigo-200",
  kiwi: "from-orange-200 to-green-200",
  lemon: "from-yellow-200 to-green-200",
  orange: "from-orange-200 to-amber-200",
  peach: "from-fuchsia-200 to-rose-200",
  pear: "from-pink-200 to-orange-200",
  plum: "from-purple-200 to-indigo-200",
  strawberry: "from-green-200 to-red-200",
  berry: "from-green-200 to-red-200",
  watermelon: "from-green-200 to-lime-200",
  melon: "from-green-200 to-lime-200",
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
