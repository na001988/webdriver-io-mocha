let sharedData = {};

export function setSharedData(key, value) {
  sharedData[key] = value;
}

export function getSharedData(key) {
  return sharedData[key];
}