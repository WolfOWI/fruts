// Data Explainer Point Paragraph (Landing page)

function DataExplainerParag(props) {
  let paragraph = "";

  // Different text based on ABOUT property
  switch (props.about) {
    case "protein":
      paragraph = "Protein: The building block of life, contributing to muscle repair and growth.";
      break;

    case "carbohydrates":
      paragraph =
        "Carbohydrates: The main energy source, represented in natural sugars and fibres in fruits.";
      break;

    case "fat":
      paragraph = "Fat: Essential for long-term energy, typically minimal amounts in fruits.";
      break;

    case "water":
      paragraph =
        "Water: The hydrating essence of fruits, aiding in nutrient transportation within the body.";
      break;

    case "sugar":
      paragraph =
        "Sugar: While natural fruit sugars come with vitamins, their consumption should be balanced.";
      break;

    case "fibre":
      paragraph =
        "Fibre: Supports digestive health, helps regulate blood sugar levels, and contributes to satiety.";
      break;

    case "vitA":
      paragraph = "Essential for vision, immune function, and skin health.";
      break;

    case "vitB6":
      paragraph = "Crucial for brain health, energy metabolism, and immune function.";
      break;

    case "vitC":
      paragraph = "A potent antioxidant that fights free radicals.";
      break;

    case "vitE":
      paragraph = "Protects cells from damage and supports skin and eye health.";
      break;

    case "vitK":
      paragraph = "Vital for blood clotting and bone health.";
      break;

    case "euros":
      paragraph =
        "Y-axis (euros): Fluctuation of prices, affected by seasonality, demand, and agricultural factors.";
      break;

    case "years":
      paragraph = "X-axis (years): Demonstrates the price each year in the European country.";
      break;

    default:
      paragraph = "No text found!";
      break;
  }

  return <p className="ms-2 text-sm">{paragraph}</p>;
}

export default DataExplainerParag;
