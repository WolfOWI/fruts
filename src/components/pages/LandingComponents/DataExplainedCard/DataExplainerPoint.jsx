// Data Explainer Card Points (Icon & Text)

// Import Components
import DataExplainerIcon from "./DataExplainerIcon.jsx";
import DataExplainerParag from "./DataExplainerParag.jsx";

function DataExplainerPoint(props) {
  return (
    <div className="flex items-center my-6">
      <DataExplainerIcon about={props.about} />
      <DataExplainerParag about={props.about} />
    </div>
  );
}

export default DataExplainerPoint;
