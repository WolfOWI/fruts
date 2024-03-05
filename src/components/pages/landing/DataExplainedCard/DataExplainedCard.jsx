// Data Explained Card (Landing Page)

// Import components
import DataExplainerPoint from "./DataExplainerPoint";

function DataExplainedCard(props) {
  let title;
  let subTitleText;
  let explainerPoints;

  switch (props.about) {
    case "calories":
      title = (
        <h3 className="text-center font-head font-bold text-xl p-1">
          compare <span className="text-red-500">calories</span>
        </h3>
      );
      subTitleText =
        "Analyse each fruit’s caloric count and how it is composed with a doughnut chart.";
      explainerPoints = (
        <div>
          <DataExplainerPoint about="protein" />
          <DataExplainerPoint about="carbohydrates" />
          <DataExplainerPoint about="fat" />
        </div>
      );
      break;

    case "sugars":
      title = (
        <h3 className="text-center font-head font-bold text-xl p-1">
          compare <span className="text-green-500">sugars & more</span>
        </h3>
      );
      subTitleText =
        "Water, sugar and fibre are the large building blocks of fruit, easily understandable by comparative bar graphs.";
      explainerPoints = (
        <div>
          <DataExplainerPoint about="water" />
          <DataExplainerPoint about="sugar" />
          <DataExplainerPoint about="fibre" />
        </div>
      );
      break;

    case "vitamins":
      title = (
        <h3 className="text-center font-head font-bold text-xl p-1">
          compare <span className="text-blue-400">vitamins</span>
        </h3>
      );
      subTitleText =
        "Understand the concentration of 5 different vitamins through polar graph visualisations.";
      explainerPoints = (
        <div>
          <DataExplainerPoint about="vitA" />
          <DataExplainerPoint about="vitB6" />
          <DataExplainerPoint about="vitC" />
          <DataExplainerPoint about="vitE" />
          <DataExplainerPoint about="vitK" />
        </div>
      );
      break;

    case "prices":
      title = (
        <h3 className="text-center font-head font-bold text-xl p-1">
          compare <span className="text-amber-500">calories</span>
        </h3>
      );
      subTitleText =
        "Fruits travel the world, and so do their prices. Get a glimpse of how fruit prices vary different European countries over the years with our timeline page.";
      explainerPoints = (
        <div>
          <DataExplainerPoint about="euros" />
          <DataExplainerPoint about="years" />
        </div>
      );
      break;

    default:
      title = <h3 className="text-center font-head font-bold text-xl p-1">title not found</h3>;
      break;
  }

  return (
    <div
      className={`h-fit w-auto flex flex-col items-center cursor-default transition-all duration-300 ease-in-out bg-slate-100 rounded-3xl p-6 mb-2`}
    >
      {title}
      <h4 className="text-center font-head font-bold text-sm">{subTitleText}</h4>
      {explainerPoints}
    </div>
  );
}

export default DataExplainedCard;
