import React, { useEffect, useState } from "react";
import "./Home.scss";
import Thisday from "../../components/Thisday/Thisday";
import Clock from "../../components/Clock/Clock";
import Thisdayinfo from "../../components/Thisdayinfo/Thisdayinfo";
import Card from "../../components/Cards/Card";
import UnloadContent from "../../components/UnloadContent/UnloadContent";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actionWeather } from "../../redux/actions";
function Home({ city }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [country, setCountry] = useState("Могилёв");
  const dispatch = useDispatch(country);

  const { weather, loading } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(actionWeather.getWeather(country));
    setCountry(city);
  }, [city]);

  const getDayinWeek = (date) => {
    let days = [
      `${t("description.week0")}`,
      `${t("description.week1")}`,
      `${t("description.week2")}`,
      `${t("description.week3")}`,
      `${t("description.week4")}`,
      `${t("description.week5")}`,
      `${t("description.week6")}`,
    ];
    let dayOfweek = date.getDay();
    return days[dayOfweek];
  };

  return (
    <>
      <div className="button__lang_body">
        <Button variant="outlined" onClick={() => changeLanguage("ru")}>
          RU
        </Button>
        <Button variant="outlined" onClick={() => changeLanguage("en")}>
          EN
        </Button>
      </div>
      <div className="home">
        {
    <Thisday
            key={weather[0]?.dt}
            temp={
              loading ? (
                <UnloadContent
                  width={"250"}
                  height={"119"}
                  widthsec={"290"}
                  heightsec={"125"}
                  xx={"0"}
                  yy={"0"}
                  rx={7}
                  ry={7}
                />
              ) : (
                <div className="temp">
                  {Math.floor(weather[0]?.main.temp)} °
                </div>
              )
            }
            urlImg={
              loading ? (
                <UnloadContent
                  width={"100"}
                  height={"100"}
                  widthsec={"100"}
                  heightsec={"110"}
                  xx={"0"}
                  yy={"10"}
                  rx={100}
                  ry={100}
                />
              ) : (
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0]?.weather[0].icon}@2x.png`}
                />
              )
            }
            days={t("description.part1")}
            tim={
              loading ? (
                <UnloadContent
                  width={"150"}
                  height={"23"}
                  widthsec={"160"}
                  heightsec={"23"}
                  xx={"5"}
                  yy={"0"}
                  rx={7}
                  ry={7}
                />
              ) : (
                <Clock />
              )
            }
            timeText={t("description.part2")}
            city={
              loading ? (
                <UnloadContent
                  width={"150"}
                  height={"23"}
                  widthsec={"160"}
                  heightsec={"23"}
                  xx={"5"}
                  yy={"0"}
                  rx={7}
                  ry={7}
                />
              ) : (
                country
              )
            }
            cityText={t("description.part3")}
          />
        }

        <Thisdayinfo
          temp={
            loading ? (
              <UnloadContent
                width={"384"}
                height={"40"}
                widthsec={"390"}
                heightsec={"60"}
                xx={"0"}
                yy={"0"}
                rx={7}
                ry={7}
              />
            ) : (
              <p className="weather__info_subtitle">
                <span className="weather__info_title">
                  {t("description.part4")}
                </span>{" "}
                {Math.floor(weather[0]?.main.temp)}° - {t("description.part5")}{" "}
                {Math.floor(weather[0]?.main.feels_like)}°
              </p>
            )
          }
          pressure={
            loading ? (
              <UnloadContent
                width={"384"}
                height={"40"}
                widthsec={"390"}
                heightsec={"60"}
                xx={"0"}
                yy={"0"}
                rx={7}
                ry={7}
              />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">
                  {t("description.part9")}{" "}
                </span>{" "}
                {weather[0]?.main.pressure} {t("description.part6")}
              </p>
            )
          }
          humidity={
            loading ? (
              <UnloadContent
                width={"384"}
                height={"40"}
                widthsec={"390"}
                heightsec={"60"}
                xx={"0"}
                yy={"0"}
                rx={7}
                ry={7}
              />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">
                  {t("description.part7")}
                </span>{" "}
                {weather[0]?.main.humidity}%
              </p>
            )
          }
          wind={
            loading ? (
              <UnloadContent
                width={"384"}
                height={"40"}
                widthsec={"390"}
                heightsec={"60"}
                xx={"0"}
                yy={"0"}
                rx={7}
                ry={7}
              />
            ) : (
              <p className="weather__info_subtitle">
                {" "}
                <span className="weather__info_title">
                  {t("description.part8")}
                </span>{" "}
                {weather[0]?.wind.speed} {t("description.part10")}
              </p>
            )
          }
        />
      </div>
      <div className="cards_days">
        {weather.map((i) => {
          return (
            <Card
              key={i.dt}
              dayWeek={getDayinWeek(new Date(i.dt_txt))}
              imgCardUrl={
                loading ? (
                  <UnloadContent
                    width={"100"}
                    height={"100"}
                    widthsec={"100"}
                    heightsec={"110"}
                    xx={"0"}
                    yy={"10"}
                    rx={100}
                    ry={100}
                  />
                ) : (
                  <img
                    src={`http://openweathermap.org/img/wn/${i?.weather[0].icon}@2x.png`}
                  />
                )
              }
              clouds={
                loading ? (
                  <UnloadContent
                    width={"170"}
                    height={"23"}
                    widthsec={"170"}
                    heightsec={"30"}
                    xx={"0"}
                    yy={"0"}
                    rx={7}
                    ry={7}
                  />
                ) : (
                  i.weather[0].description
                )
              }
              date={
                loading ? (
                  <UnloadContent
                    width={"190"}
                    height={"23"}
                    widthsec={"190"}
                    heightsec={"30"}
                    xx={"0"}
                    yy={"0"}
                    rx={7}
                    ry={7}
                  />
                ) : (
                  `${t("description.part11")} : ${i.dt_txt.slice(0, 10)}`
                )
              }
              temperatura={
                loading ? (
                  <UnloadContent
                    width={"87"}
                    height={"95"}
                    widthsec={"90"}
                    heightsec={"100"}
                    xx={"0"}
                    yy={"0"}
                    rx={7}
                    ry={7}
                  />
                ) : (
                  <div className="tempbody">{Math.floor(i.main.temp)}°</div>
                )
              }
              wind={
                loading ? (
                  <UnloadContent
                    width={"120"}
                    height={"45"}
                    widthsec={"125"}
                    heightsec={"50"}
                    xx={"0"}
                    yy={"0"}
                    rx={7}
                    ry={7}
                  />
                ) : (
                  `${i.wind.speed} ${t("description.part10")}`
                )
              }
              Pressur={
                loading ? (
                  <UnloadContent
                    width={"120"}
                    height={"45"}
                    widthsec={"125"}
                    heightsec={"50"}
                    xx={"0"}
                    yy={"0"}
                    rx={7}
                    ry={7}
                  />
                ) : (
                  i.main.humidity + " %"
                )
              }
            />
          );
        })}
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
