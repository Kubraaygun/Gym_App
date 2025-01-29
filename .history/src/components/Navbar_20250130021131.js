import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const location = useLocation(); // Use useLocation to get the location of the current URL

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "70px", height: "70px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        {location.pathname === "/" && ( // If we are on the home page
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
        )}
        {location.pathname === "/" && (
          <a
            href="#exercises"
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            Egzersizler
          </a>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
