import { useState, useEffect } from "react";

const summaryStyles: React.CSSProperties = {
  textAlign: "center",
  padding: "16px",
  color: "white",
  backgroundColor: "#41474d",
  borderRadius: "8px",
};

type SummaryProps = {
  customer?: string;
  groupsBySensor?: { [sensorName: string]: string[] };
  style?: React.CSSProperties;
};

export default function Summary({
  customer,
  groupsBySensor,
  style,
}: SummaryProps) {
  const [sensorsNumber, setSensorsNumber] = useState<number | undefined>(
    undefined
  );
  const [groupsNumber, setGroupsNumber] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const sensorsNumber = groupsBySensor
      ? Object.keys(groupsBySensor).length
      : undefined;

    const groupsNumber = groupsBySensor
      ? new Set(
          Object.values(groupsBySensor).reduce(
            (res, groups) => [...res, ...groups],
            []
          )
        ).size
      : undefined;

    setSensorsNumber(sensorsNumber);
    setGroupsNumber(groupsNumber);
  }, [groupsBySensor]);

  return (
    <div style={{ ...summaryStyles, ...(style || {}) }}>
      <span>Customer </span>
      <strong>{customer || "?"}</strong>
      <span> contains </span>
      <strong>{sensorsNumber || "?"}</strong>
      <span> sensors used in </span>
      <strong>{groupsNumber || "?"}</strong>
      <span> groups.</span>
    </div>
  );
}
