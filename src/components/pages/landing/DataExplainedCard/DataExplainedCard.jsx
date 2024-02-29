// Data Explained Card (Landing Page)

// Import components
import DataExplainerPoint from "./DataExplainerPoint";

function DataExplainedCard() {
  return (
    <div
      className={`w-auto flex flex-col items-center cursor-default transition-all duration-300 ease-in-out bg-slate-100 rounded-3xl p-6 m-2`}
    >
      <h3 className="text-center font-head font-bold text-xl p-1">compare calories</h3>
      <h4 className="text-center font-head font-bold text-sm">
        Analyse each fruit’s caloric count and how it is composed with a doughnut chart.
      </h4>
      <div>
        <DataExplainerPoint about="protein" />
        <DataExplainerPoint about="carbohydrates" />
        <DataExplainerPoint about="fat" />
      </div>
    </div>
  );
}

export default DataExplainedCard;
