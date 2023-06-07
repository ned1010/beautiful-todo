import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
    >
      {theme === "light" ? <DarkModeIcon sx={{color: "#213555"}}/> : <LightModeIcon sx={{color: "#fff"}} />}
    </IconButton>
  );
}

export default ToggleTheme;
