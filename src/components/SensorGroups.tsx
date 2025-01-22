type SensorGroupProps = {
  prefix: string;
  numberOfGroups:number;
  style?: React.CSSProperties;
};


export default function SensorGroups(props:SensorGroupProps) {
  const {prefix,numberOfGroups} = props
  return <span>Sensor prefixed with <span>{prefix}</span> contains a total of <span>{numberOfGroups}</span></span>
}
