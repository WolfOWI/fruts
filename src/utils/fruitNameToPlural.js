// Get a singular fruit name string and return a plural string
// EX: "kiwi" to "kiwis"

export default function fruitNameToPlural(fruitName) {
  if (fruitName === "strawberry") {
    return "strawberries";
  } else if (fruitName === "peach") {
    return "peaches";
  } else {
    // Add an "s" if not strawberry or peach
    return fruitName + "s";
  }
}
