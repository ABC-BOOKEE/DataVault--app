import React, { useEffect, useState, useRef } from "react";
import FileCard from "./FileCard";
import { Table, Button } from "@mantine/core";
import { Contract, ethers, providers } from "ethers";
import { ABI, CONTRACTADDRESS } from "../../constant";
import Web3Modal from "web3modal";
import { Web3Storage } from "web3.storage";

const StoredFiles = () => {
  const [files, setFile] = useState([]);
  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);
  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "Ethereum Mainnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
      retrieve();
    }
  }, [walletConnected]);

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();

      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  function makeStorageClient() {
    return new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAzYTg2NERGZTM4OTA3NzA0MzNFMWVjNjU0MjUxYjBBM2Y5MGY0NzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk1Mjk0MzUwMTYsIm5hbWUiOiJib2tlZSJ9.cWkPaWS7m_-bNdk76LsVJpiwoYepOEIFMWK0Fp1UiLU",
    });
  }
  const client = makeStorageClient();

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

  const retrieve = async () => {
    const signer = await getProviderOrSigner(true);
    console.log(await signer.getAddress());
    const contract = new Contract(CONTRACTADDRESS, ABI, signer);
    const files = await contract.getDocuments(await signer.getAddress());
    console.log(files);
    setFile(files);
  };

  const rows = files.map((element) => (
    <tr key={element.name}>
      <td>{element.docName}</td>
      <td>{element.size ? element.size : 0} KB</td>
      <td>{element.time ? element.time : "unknown"}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <div>
      <h3 className="font-epilogue ml-3 my-3 font-bold sm:text-[20px] text-[16px] leading-[38px] text-white">
        Recent files
      </h3>

      <div className="flex flex-row ">
        <FileCard
          owner="Mbunji Mohamed"
          title="Lecture 2"
          description="Lecture 2 assignment"
        />
        <FileCard
          owner="Mbunji Mohamed"
          title="Lecture 2"
          description="Lecture 2 assignment"
        />
        <FileCard
          owner="Mbunji Mohamed"
          title="Lecture 2"
          description="Lecture 2 assignment"
        />
      </div>

      <h3 className="font-epilogue ml-3 my-3 font-bold sm:text-[20px] text-[16px] leading-[38px] text-white">
        All files
      </h3>

      <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] py-2 px-10">
        <Table horizontalSpacing="md" verticalSpacing="xs" fontSize="md">
          <thead>
            <tr>
              <th>File name</th>
              <th>size</th>
              <th>Uploaded on</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="text-white">{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default StoredFiles;
