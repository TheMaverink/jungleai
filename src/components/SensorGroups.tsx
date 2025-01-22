import React from 'react';
import utils from '../utils/utils';

type SensorGroupProps = {
  sensorsData: any;
  selectedSensor: string;
  style?: React.CSSProperties;
};

const boldStyles: React.CSSProperties = {
  fontWeight: 700,
  fontSize:'18px'
};

export default function SensorGroups(props: SensorGroupProps) {
  const { selectedSensor, sensorsData } = props;

  const currentSensorPrefix = utils.extractSensorPrefix(selectedSensor);

  const allGroupsCount = React.useMemo(() => {
    if (!sensorsData?.groupsBySensor) return 0;

    const allGroups = Object.values(sensorsData.groupsBySensor).flat();
    const allGroupsByPrefix = allGroups.filter(
      (group: any) => utils.extractSensorPrefix(group) === currentSensorPrefix
    );

    return allGroupsByPrefix.length;
  }, [sensorsData, currentSensorPrefix]);

  return (
    <span>
      Sensor prefixed with{' '}
      <span style={ boldStyles }>{currentSensorPrefix}</span> contains a total
      of <span style={ boldStyles }>{allGroupsCount}</span>
    </span>
  );
}
