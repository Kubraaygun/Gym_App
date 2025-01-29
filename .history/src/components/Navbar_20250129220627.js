import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [showExerciseButton, setShowExerciseButton] =
    useSyncExternalStore(true);

  useEffect(() => {
    if (location.pathname === "/exercise") {
      setShowExerciseButton(false); // ExerciseDetail sayfasındayken butonu gizle
    } else {
      setShowExerciseButton(true); // Diğer sayfalarda butonu göster
    }
  }, [location.pathname]);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", sx: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "70px",
            height: "70px",

            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Anasayfa
        </Link>

        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Egzersizler
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
