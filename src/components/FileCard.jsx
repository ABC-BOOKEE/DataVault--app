import React from "react";

import { tagType, thirdweb } from "../assets";

const FileCard = ({
  owner,
  fileName,
  description,
  uploadedon,
  cid,
  deadline,
  amountCollected,
  size,
  handleClick,
}) => {
  function openRecentDoc() {
    let baseUrlr = ".ipfs.w3s.link";
    window.open("https://" + cid + baseUrlr);
  }

  return (
    <div
      className="sm:w-[288px] w-full m-3 rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={openRecentDoc}
    >
      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <h3 className="font-epilogue pl-2 font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {fileName}
          </h3>
        </div>

        <div className="block">
          <p className=" font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[130px] truncate">
              Uploaded on {uploadedon}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]"></h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
              {size} KB
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={thirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            By <span className="text-[#5e6ca8] ps-5 h-4">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
