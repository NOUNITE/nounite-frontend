const NewsLetter = () => {
  return (
    <div className="my-10 flex w-full justify-center items-center">
      <div className="bg-primary w-[90vw] lg:w-[80vw] flex  flex-row px-2 lg:px-6 justify-between items-center py-5 rounded-lg ">
        <h1 className="py-1 text-left lg:text-center text-white font-poppins text-[12px] md:text-base lg:text-xl ">
          Subscribe To Our Newsletters
        </h1>

        <div className="flex overflow-hidden flex-row rounded-sm w-[70%] lg:w-[60%] bg-slate-100 justify-between px-1 py-1 items-center">
          <input 
            type="text"
            className="h-[2rem] md:h-[3rem] font-poppins outline-none w-[55%] md:w-[60%] lg:w-[70%] text-[12px] lg:text-base bg-slate-100 px-1 md:px-3"
            placeholder="Your email address"
          />
            <button
              className="bg-btnColor text-[12px] lg:text-base font-poppins text-slate-100 placeholder:text-[#fff] py-2 lg:px-4 px-1 rounded-sm"
              type="submit"
            >
              Subscribe
            </button>
        </div>
      </div>

    </div>

  );
};

export default NewsLetter;