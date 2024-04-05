// UTILITY FUNCTION:
// ----------------------------------
// Get Tailwind CSS Background gradient based on: 1) 2 x fruit type, 2) angle of gradient
// Example: "from-[#6ccbd0] to-[#b0d16d] hover:bg-gradient-to-b"

// First Fruit
const fromfruitGradient = {
  apple: "from-[#6ccbd0]",
  kiwi: "from-[#b0d16d]",
  lemon: "from-[#c9ac36]",
  orange: "from-[#d49659]",
  peach: "from-[#e3b1c4]",
  pear: "from-[#bf5c80]",
  plum: "from-[#945cbf]",
  strawberry: "from-[#bf5c5c]",
  berry: "from-[#bf5c5c]",
  watermelon: "from-[#5abf66]",
  melon: "from-[#5abf66]",
};

// Second Fruit
const tofruitGradient = {
  apple: "to-[#6ccbd0]",
  kiwi: "to-[#b0d16d]",
  lemon: "to-[#c9ac36]",
  orange: "to-[#d49659]",
  peach: "to-[#e3b1c4]",
  pear: "to-[#bf5c80]",
  plum: "to-[#945cbf]",
  strawberry: "to-[#bf5c5c]",
  berry: "to-[#bf5c5c]",
  watermelon: "to-[#5abf66]",
  melon: "to-[#5abf66]",
};

// Angle of gradient
const gradientAngle = {
  vertical: "bg-gradient-to-b",
  horisontal: "bg-gradient-to-r",
  diagonal: "bg-gradient-to-br",
};

function get1FruitGradient(fruit1, fruit2, angle) {
  return gradientAngle[angle] + " " + fromfruitGradient[fruit1] + " " + tofruitGradient[fruit2];
}
// ----------------------------------

export default get1FruitGradient;
