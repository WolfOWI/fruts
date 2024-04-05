// Fruit Type Card Text (used in Fruit Type Card)

// FRUIT TYPE CARD PARAGRAPH TEXT COMPONENT
// ----------------------------------
function FruitTypeCardParag(props) {
  let description = "";

  // Return different fun facts / information based on fruit prop passed
  switch (props.fruit) {
    case "apple":
      description =
        "With fibre and Vitamin C; perfect for heart health and digestion, and keeps the doctors away.";
      break;
    case "kiwi":
      description =
        "Bursting with Vitamin C & K, kiwi is a powerhouse for immune support and gut health.";
      break;
    case "lemon":
      description =
        "High in Vitamin C and flavonoids, great for detoxification and enhancing skin health.";
      break;
    case "orange":
      description =
        "Your zesty dose of Vitamin C, excellent for immune function and antioxidant protection.";
      break;
    case "peach":
      description =
        "Juicy and sweet, peaches offer vitamins A and C, promoting skin health and digestion.";
      break;
    case "pear":
      description =
        "Soft, sweet, and fibre-rich, pears are ideal for digestive health and maintaining blood sugar levels.";
      break;
    case "plum":
      description =
        "This purple fruit is rich in antioxidants & supports heart health and digestion.";
      break;
    case "strawberry":
      description =
        "High in manganese, these are great for heart health and blood sugar regulation.";
      break;
    case "watermelon":
      description = "Juicy and perfect for hydration, heart health, and reducing inflammation.";
      break;

    default:
      description = "Fruit description not found! (FruitTypeCardParag.jsx)";
      break;
  }

  return <p className="text-center font-body text-sm">{description}</p>;
}
// ----------------------------------

export default FruitTypeCardParag;
