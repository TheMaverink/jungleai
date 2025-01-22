import React from 'react';

import CustomLoader from './CustomLoader';
import CustomList from './CustomList';
import CustomSelect from './CustomSelect/CustomSelect';
import Summary from './Summary';
import SensorGroups from './SensorGroups';

import api from '../api/api';

const sensorExplorerWrapperStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: '2px solid red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const labelStyles: React.CSSProperties = {
  justifySelf: 'start',
  fontSize: '16px',
};

export default function SensorExplorer() {
  const [isLoading, setIsloading] = React.useState(false);
  const [sensorsData, setSensorsData] = React.useState<any>({});

  const sensors = sensorsData?.groupsBySensor
    ? Object.keys(sensorsData?.groupsBySensor)
    : [];

  const [selectedSensor, setSelectedSensor] = React.useState<string>(
    sensors[0]
  );

  React.useEffect(() => {
    const getGroupsBySensor = async () => {
      try {
        setIsloading(true);

        const response = await api.fetchGroupsBySensor();
        console.log('response');
        console.log(response);

        setSensorsData(response);
      } catch (error) {
      } finally {
        setIsloading(false);
      }
    };

    getGroupsBySensor();
  }, []);

  return (
    // TODO: continue from here
    <div style={sensorExplorerWrapperStyles}>
      {isLoading && <CustomLoader />}

      <Summary
        customer={sensorsData?.customer}
        groupsBySensor={sensorsData.groupsBySensor}
      />

      <div>
        <span>Sensor</span>
        <CustomSelect
          selectedOption={selectedSensor}
          options={sensors}
          placeholder="Select sensor"
          onOptionClick={(sensor) => setSelectedSensor(sensor)}
        />
        <span>is composed by:</span>
      </div>

      <CustomList listData={sensorsData?.groupsBySensor[selectedSensor]}/>
    </div>

    // TODO: Uncomment once part 1 is complete
    // <SensorGroups />
  );
}
