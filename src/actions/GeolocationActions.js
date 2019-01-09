import {
  LONGITUDE_CHANGED,
  LATITUDE_CHANGED
} from './types';

export const longitudeChanged = number => ({
  type: LONGITUDE_CHANGED,
  payload: number
});

export const latitudeChanged = number => ({
  type: LATITUDE_CHANGED,
  payload: number
});
