import { useState } from "react";
import ComponentsPreview from "./components/ComponentsPreview";
import SensorExplorer from "./components/SensorExplorer";
import "./styles.css";

export default function App() {
  const [showPreview, setShowPreview] = useState<boolean>(true);
  return (
    <div className="App">
      {showPreview && <ComponentsPreview />}
      {!showPreview && <SensorExplorer />}
    </div>
  );
}
