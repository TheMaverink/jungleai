import { useState } from "react";

import CustomList from "./CustomList";
import CustomLoader from "./CustomLoader";
import CustomSelect from "./CustomSelect/CustomSelect";
import Summary from "./Summary";

const componentsPreviewStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gap: "16px",
  alignItems: "center",
  justifyItems: "start",
  backgroundColor: "black",
  padding: "16px",
};

const labelStyles: React.CSSProperties = {
  justifySelf: "start",
  fontSize: "16px",
};

export default function ComponentsPreview() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const groupsBySensor = {
    sensor1Example: ["Group1Example", "Group2Example"],
    sensor2Example: ["Group1Example"],
  };

  return (
    <div style={componentsPreviewStyles}>
      <span style={labelStyles}>Summary:</span>
      <Summary customer="CustomerExample" groupsBySensor={groupsBySensor} />

      <span style={labelStyles}>CustomLoader:</span>
      <CustomLoader />

      <span style={labelStyles}>CustomSelect:</span>
      <CustomSelect
        selectedOption={selectedOption}
        options={["Option 1", "Option 2"]}
        onOptionClick={(option: string) => setSelectedOption(option)}
        style={{ maxWidth: "150px" }}
      />

      <span style={labelStyles}>CustomList:</span>
      <CustomList
        listData={["Entry1", "Entry2"]}
        style={{ maxWidth: "200px" }}
      />
    </div>
  );
}
