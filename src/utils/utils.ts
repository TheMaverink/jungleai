async function simulateRequest(delay: number): Promise<boolean> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, delay)
  );
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function extractSensorPrefix(sensorName: string): string {
  return sensorName?.split('_')?.[0]
}


const utils = {
  simulateRequest,
  generateRandomNumber,
  extractSensorPrefix
};

export default utils;


