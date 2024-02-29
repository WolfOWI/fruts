// Data Explainer Point (Icon & Text)

// Import Components
import DataExplainerIcon from "./DataExplainerIcon";

function DataExplainerPoint(props) {
  return (
    <div className="flex items-center my-4">
      <DataExplainerIcon about={props.about} />
      <p className="ms-2 text-sm">
        Protein: The building block of life, contributing to muscle repair and growth.
      </p>
    </div>
  );
}

export default DataExplainerPoint;
