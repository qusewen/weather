import "./App.scss";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Header } from "./Shared/Header/Header";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const [flag, setFlag] = useState("ligth");
  const [coutr, setcount] = useState("Mogilev");
  const [checks, setChec] = useState(false);

  const searchCoyntry = (e) => {
    setcount(e.target.value);
  };

  const themeToggle = (e) => {
    setChec(checks? false:true)
    if (flag === "ligth") {
      setFlag("dark");
      localStorage.setItem("theme", "dark");
      localStorage.setItem('check', true)
      setChec(true)

    } else {
      setFlag("ligth");
      localStorage.setItem("theme", "ligth");
      localStorage.setItem('check', false)
      setChec(false)
    }
  };


  useEffect(() => {
    setFlag(localStorage.getItem("theme"));
    setChec(localStorage.getItem('check') == "true"? true: false)
  }, []);

  return (
    <div className="app" data-theme={flag}>
      <div className="container" data-theme={flag}>
        <Header
          themeToggle={themeToggle}
          onChange={searchCoyntry}
          label={t("description.part12")}
          check={checks}
        />
        <Home city={coutr} />
      </div>
    </div>
  );
}

export default App;
