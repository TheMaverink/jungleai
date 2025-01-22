const listStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: "100%",
  borderWidth: "3px 0",
  borderStyle: "solid",
  borderColor: "#41474d",
  borderRadius: "8px",
};

const entryStyles: React.CSSProperties = {
  fontSize: "12px",
  margin: "0 4px",
  padding: 8,
  backgroundColor: "#41474d",
  borderRadius: "8px",
};

type CustomListProps = {
  listData?: string[];
  style?: React.CSSProperties;
};

export default function CustomList({ listData, style }: CustomListProps) {
  return (
    <div style={{ ...listStyles, ...(style || {}) }}>
      {(listData ?? []).map((entry) => (
        <span key={entry} style={entryStyles}>
          {entry}
        </span>
      ))}
    </div>
  );
}
