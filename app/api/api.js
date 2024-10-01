import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

export const carDealerApi = {
  async fetchMakes() {
    try {
      const response = await instance.get(
        'GetMakesForVehicleType/car?format=json'
      );
      return response.data.Results;
    } catch (error) {
      throw new Error('Failed to fetch vehicle makes');
    }
  },

  async fetchModelsForMakeAndYear(makeId, year) {
    try {
      const response = await instance.get(
        `GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );
      return response.data.Results;
    } catch (error) {
      throw new Error('Failed to load car models');
    }
  },
};
