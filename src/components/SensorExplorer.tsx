import React from 'react';

import CustomLoader from './CustomLoader';
import CustomList from './CustomList';
import CustomSelect from './CustomSelect/CustomSelect';
import Summary from './Summary';
import SensorGroups from './SensorGroups';
import utils from '../utils/utils';

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

  const currentSensorPrefix = utils.extractSensorPrefix(selectedSensor);

  // console.log('selectedSensor')
  // console.log(selectedSensor)

  // console.log('currentSensorPrefix')
  // console.log(currentSensorPrefix)

  const allGroupsCount = React.useMemo(() => {
    if (!sensorsData?.groupsBySensor) return 0;

    const allGroups = Object.values(sensorsData.groupsBySensor).flat();
    const allGroupsByPrefix = allGroups.filter(
      (group: any) => utils.extractSensorPrefix(group) === currentSensorPrefix
    );

    console.log('allGroupsByPrefix', allGroupsByPrefix);

    return allGroupsByPrefix.length;
  }, [sensorsData, currentSensorPrefix]);

  if (sensorsData?.groupsBySensor) {
    const allGroups = Object.values(sensorsData?.groupsBySensor)?.flat();
    const allGroupsByPrefix = allGroups?.filter((group: any) => {
      return utils.extractSensorPrefix(group) === currentSensorPrefix;
    });

    console.log('allGroupsByPrefix');
    console.log(allGroupsByPrefix);
  }

  // console.log('sensorsData?.groupsBySensor')
  // console.log(sensorsData?.groupsBySensor)

  // const groupsByPrefix = sensorsData?.groupsBySensor?.filter((sensor:any)=>{
  //   console.log('sensor')
  //   console.log(sensor)
  //   return sensor
  // })

  // console.log('currentSensorPrefix')
  // console.log(currentSensorPrefix)

  // console.log('sensorsData')
  // console.log(sensorsData)

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

      {sensorsData?.groupsBySensor?.[selectedSensor] && (
        <CustomList listData={sensorsData.groupsBySensor[selectedSensor]} />
      )}

      <SensorGroups
        prefix={currentSensorPrefix}
        numberOfGroups={allGroupsCount}
      />
    </div>

    //
  );
}
