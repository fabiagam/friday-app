/*************************************
 * Car Service
 * @file: services/CarService.js
 * @author: James Abiagam
 ************************************/
import constants from "../util/constants";

const { BASE_URL } = constants;

export async function getAllCarMake() {
  const response = await fetch(`${BASE_URL}/api/makes`);
  return await response.json();
}

export async function getAvailableCarModels(make) {
  const response = await fetch(`${BASE_URL}/api/models?make=${make}`);
  return await response.json();
}

export async function getRegisteredCars({ make, model }) {
  const response = await fetch(
    `${BASE_URL}/api/vehicles?make=${make}&model=${model}`
  );
  return await response.json();
}
