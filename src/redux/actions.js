import axios from "axios";

export const actionTypes = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCESS: "SET_WEATHER_SUCCESS",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",
};
export const actionWeather = {
  getWeather: (country) => {
    return async (dispatch) => {
      dispatch({ type: actionTypes.SET_WEATHER });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${country}&APPID=ce616969cd740fccc2086080fbc71d41&units=metric`
        )
        .then((res) => {
          dispatch({
            type: actionTypes.SET_WEATHER_SUCCESS,
            payload: res.data.list.filter((reading) =>
              reading.dt_txt.includes("18:00:00")
            ),
            thisDay: res.data.list[0],
          });
        })
        .catch((err) => {
          console.log(err.response, err);
          dispatch({
            type: actionTypes.SET_WEATHER_ERROR,
            payload: err.response,
          });
        });
    };
  },
};
