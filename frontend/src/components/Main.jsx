import React, { useContext } from "react";
import Todos from "./Todos";
import Footer from "./Footer";
import ThemeContext from "../utilities/ThemeContext";
import ToggleTheme from "../utilities/ToggleTheme";

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme} className="main">
      <h2>To Do App</h2>
      <Todos />
      <ToggleTheme />
      <Footer />
    </div>
  );
}

export default Main;
