import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assetes/images/Logo.png";
const Navbar = () => {
  return (
    <Stack>
      <Link>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack>
        <Link to="/">Home</Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        ></a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
