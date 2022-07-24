import { actionTypes } from "./actions";

const initialState = {
  weather: [],
  thisDay:[],
  succes: false,
  loading: false,
  error: false,
};

export const reducerWeather = (state = initialState, action) => {
  const {payload,thisDay, type} = action
  switch (type) {
    case actionTypes.SET_WEATHER:
      return {
        ...state,
        weather: [],
        thisDay:[],
        succes: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload,
        thisDay:thisDay,
        succes: true,
        loading: false, 
        error: false
      };
    case actionTypes.SET_WEATHER_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
