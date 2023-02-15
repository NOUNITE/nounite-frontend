import DownloadBtn from "../molecule/downloadBtn";
import { altApple } from "../../assets/index";

const Advert = () => {
  return ( 
    <div >
      <div className="bg-primary w-full flex flex-col justify-center items-center px-5 pb-10">
        <h1 className="text-white font-poppins pt-10 font-semibold text-center text-xl md:text-2xl lg:text-4xl ">Download our App on the App Store or Play Store</h1>
        <div className="pb-20 pt-10">
          <DownloadBtn imgSrc={altApple} className={"bg-white text-textHover flex items-center gap-3 px-2 lg:px-8 py-2 md:px-2 rounded-md cursor-pointer"}/>
        </div>
      </div>
      <div className="des w-full"></div>
    </div>
  );
};
 
export default Advert;