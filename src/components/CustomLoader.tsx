const ldsDualRingStyles: React.CSSProperties = {
  display: "inline-block",
  width: "100%",
  height: "100%",
  padding: "8px",
};

const ldsDualRingInnerStyles: React.CSSProperties = {
  display: "block",
  width: "80%",
  height: "80%",
  borderRadius: "50%",
  border: "6px solid #fff",
  borderColor: "#fff transparent #fff transparent",
  animation: "lds-dual-ring 1.2s linear infinite",
};

const loaderStyles: React.CSSProperties = {
  height: "80px",
  width: "80px",
};

type CustomLoaderProps = {
  style?: React.CSSProperties;
};

export default function CustomLoader({ style }: CustomLoaderProps) {
  return (
    <div style={{ ...loaderStyles, ...(style || {}) }}>
      <div style={ldsDualRingStyles}>
        <span style={ldsDualRingInnerStyles} />
      </div>
    </div>
  );
}
