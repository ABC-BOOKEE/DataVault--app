import React from "react";
import { useState, useRef, useEffect } from "react";
import { Contract, ethers, providers } from "ethers";
import CustomButton from "./CustomButton";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import { FileUploader } from "react-drag-drop-files";
import DragAndDrop from "./DragAndDrop";
import Sidebar from "./Sidebar";
import Dashnav from "./Dashnav";
import { ABI, CONTRACTADDRESS } from "../../constant";
import Web3Modal from "web3modal";
import { Web3Storage } from "web3.storage";
import { Button } from "@mui/material";
import { Reload } from "@web3uikit/icons";

const Upload = () => {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const web3ModalRef = useRef();
  const theme = useMantineTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "Ethereum Mainnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
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

  const handleChange = async () => {
    setIsSubmitting(true);

    try {
      const signer = await getProviderOrSigner(true);
      console.log(file[0].name);
      let time = new Date();
      time = time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
      let fileName = file[0].name;
      let fileSize = file[0].size.toString();
      console.log(fileSize);
      console.log(time.toString());
      let cid = await client.put(file);

      const contract = new Contract(CONTRACTADDRESS, ABI, signer);
      const res = await contract.store(cid, time, fileName, fileSize);
      await res.wait();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      // we can refresh the page
    }
  };

  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Dashnav />
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {isLoading && <Loader />}
          <div className="flex justify-center items-center p-[12px]  sm:min-w-[380px]  bg-[#3a3a43] rounded-[10px]">
            <button className="font-epilogue font-bold sm:text-[20px] text-[14px] leading-[38px] text-white">
              Select from File explorer 📂{" "}
            </button>
          </div>

          {/* message prop requires a string
    <div className='flex justify-center items-center p-[12px] mt-4  sm:min-w-[380px]  bg-[#3a3a43] rounded-[10px]'>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </div>    
    */}

          {/* <DragAndDrop /> */}

          <div className=" m-6">
            <Dropzone
              onDrop={(files) => {
                setFile(files);
                console.log("accepted files", files);
              }}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              style={{
                backgroundColor: "#3a3a43",
                paddingLeft: 70,
                paddingRight: 70,
              }}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: rem(220), pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <IconUpload
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors[theme.primaryColor][
                        theme.colorScheme === "dark" ? 4 : 6
                      ]
                    }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    size="3.2rem"
                    stroke={1.5}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>

                <div className="">
                  {file ? (
                    <div>
                      <Text size="xl" color="white" inline>
                        Files uploaded
                      </Text>
                      <Text size="sm" color="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not
                        exceed 5mb
                      </Text>
                    </div>
                  ) : (
                    <div>
                      <Text size="xl" color="white" inline>
                        Drag & Drop files here or click to select files
                      </Text>
                      <Text size="sm" color="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not
                        exceed 5mb
                      </Text>
                    </div>
                  )}
                </div>
              </Group>
            </Dropzone>
          </div>

          <div className="flex justify-center items-center mt-[40px]">
            {/* <CustomButton
              btnType="submit"
              title="Submit to store in Web3"
              styles="orange_bg_gradient"
            > */}
            {/* </CustomButton> */}

            <button
              onClick={handleChange}
              className="font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[15px] orange_bg_gradient"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending" : "Submit to the store"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
