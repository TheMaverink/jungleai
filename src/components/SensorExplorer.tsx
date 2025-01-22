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
  minHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
};

const sensorSelectStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '16px',
  whiteSpace: 'nowrap',
};

interface SensorsData {
  customer?: string;
  groupsBySensor?: Record<string, string[]>;
}

export default function SensorExplorer() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [sensorsData, setSensorsData] = React.useState<SensorsData>({});

  const sensors = sensorsData?.groupsBySensor
    ? Object.keys(sensorsData?.groupsBySensor)
    : [];

  const [selectedSensor, setSelectedSensor] = React.useState<string>(
    sensors[0]
  );

  React.useEffect(() => {
    const getGroupsBySensor = async () => {
      try {
        setIsLoading(true);

        const response: SensorsData = await api.fetchGroupsBySensor();

        setSensorsData(response);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getGroupsBySensor();
  }, []);

  return (
    <div style={sensorExplorerWrapperStyles}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <Summary
            customer={sensorsData?.customer}
            groupsBySensor={sensorsData.groupsBySensor}
          />

          <div style={sensorSelectStyles}>
            <span>Sensor</span>
            <CustomSelect
              selectedOption={selectedSensor}
              options={sensors}
              placeholder="Select sensor"
              onOptionClick={(sensor) => setSelectedSensor(sensor)}
            />
            <span>is composed by:</span>
          </div>

          {sensorsData?.groupsBySensor?.[selectedSensor] && (
            <CustomList listData={sensorsData.groupsBySensor[selectedSensor]} />
          )}

          <SensorGroups
            sensorsData={sensorsData}
            selectedSensor={selectedSensor}
          />
        </>
      )}
    </div>

    //
  );
}
