import React from "react";
import { google, apple} from "../../assets/index";

interface BtnInterface{
  imgSrc?:any
  className?:any
}

const DownloadBtn = ({className, imgSrc} : BtnInterface) => {
  return ( 
    <div className="flex items-center gap-5 mt-5 ">
      <div className={ className }>
        <div>
          <img src={imgSrc} />
        </div>
        <div className="flex flex-col ">
          <p className="text-xs ">Download on the</p>
          <p className="md:text-base text-sm">App Store</p>
        </div>
      </div>
      <div className="bg-textHover text-white flex items-center gap-3 px-2 lg:px-8 py-2 md:px-2 rounded-md cursor-pointer">
        <div>
          <img src={google} />
        </div>

        <div>
          <p className="text-xs">Get it on</p>
          <p className="md:text-base text-sm">Google Play</p>
        </div>
      </div>
    </div>
  );
};
 
export default DownloadBtn;