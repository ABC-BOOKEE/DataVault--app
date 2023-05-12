import React from "react";
import { logo } from "../assets";
import { Text } from "@mantine/core";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-20 h-20  object-contain" />

        <Box display="flex" justifyContent="space-between">
          

            <button className="text-white px-3 "
              style={{
                color: "white",
              }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              About us
            </button>

            <button className="text-white px-3 mx-3"
              style={{
                color: "white",
              }}
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Login
            </button>
        

          <button className="blue_bg_gradient rounded-full py-2 px-4"
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/Team-clear/pharmacySupplyChainManagementSystem",
                "_blank"
              )
            }
           
          >
            GitHub
          </button>

        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
