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

const utils = {
  simulateRequest,
  generateRandomNumber,
};

export default utils;
