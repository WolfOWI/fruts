// UTILITY FUNCTION:
// ----------------------------------
// Returns a background HEX CODE (colour) based on given fruit type

function get1FruitBGColor(fruit) {
  const fruitColor = {
    apple: "bg-[#6ccbd0]",
    kiwi: "bg-[#b0d16d]",
    lemon: "bg-[#c9ac36]",
    orange: "bg-[#d49659]",
    peach: "bg-[#e3b1c4]",
    pear: "bg-[#bf5c80]",
    plum: "bg-[#945cbf]",
    strawberry: "bg-[#bf5c5c]",
    berry: "bg-[#bf5c5c]",
    watermelon: "bg-[#5abf66]",
    melon: "bg-[#5abf66]",
  };

  return fruitColor[fruit];
}
// ----------------------------------

export default get1FruitBGColor;
