// Data Explainer Card Points (Icon & Text) (Used in Data Explained Cards)

// IMPORT
// ----------------------------------
// Components
import DataExplainerIcon from "./DataExplainerIcon.jsx"; // Icon
import DataExplainerParag from "./DataExplainerParag.jsx"; // Text
// ----------------------------------

// DATA EXPLAINER POINT COMPONENT
// ----------------------------------
function DataExplainerPoint(props) {
  return (
    <div className="flex items-center my-6">
      <DataExplainerIcon about={props.about} />
      <DataExplainerParag about={props.about} />
    </div>
  );
}
// ----------------------------------

export default DataExplainerPoint;
