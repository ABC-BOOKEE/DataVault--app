 
import { logo } from "../assets";
import { Contract, ethers, providers } from "ethers";
 
import React from "react";
import { altLogo } from "../assets";
 
import { Text } from "@mantine/core";
import { Box, Typography, Button } from "@mui/material";
import Web3Modal from "web3modal";

import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
const Navbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();
  const makevote = async (address) => {
    try {
      const signer = await getProviderOrSigner(true);
      const collegeContract = new Contract(CONTRACT_ADDRESS, abi, signer);
      const transaction = await collegeContract.makevote(address);

      setLoading(true);
      await transaction.wait();
      setLoading(false);
      window.alert("You successfully voted");
    } catch (err) {
      console.error(err);
    }
  };

  /*
      connectWallet: Connects the MetaMask wallet
    */
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();

      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * getOwner: calls the contract to retrieve the owner
   */

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 3141) {
      window.alert("Change the network to hyperspace tesnet");
      throw new Error("Change network to hyperspace testnet");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "Ethereum Mainnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
    }
  }, [walletConnected, loading]);

  const renderButton = () => {
    if (!walletConnected) {
      return <button onClick={connectWallet}>Connect your wallet</button>;
    }

    if (loading) {
      return <button>Loading...</button>;
    }

    if (walletConnected) {
      return (
        <div>
          <div>Connected!</div>
        </div>
      );
    }
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={altLogo} alt="SyncVault_logo" className="w-40 h-20  object-contain" />

        <Box display="flex" justifyContent="space-between">
          <button
            className="text-white px-3 "
            style={{
              color: "white",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>

          

          <button
            className="text-white px-3 mx-3"
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/ABC-BOOKEE/SyncVault",
                "_blank"
              )
            }
          >
            GitHub
          </button>

          <button
            className="blue_bg_gradient rounded-full py-2 px-4"
            style={{
              color: "black",
            }}
          >
            {renderButton()}
          </button>
          
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;
