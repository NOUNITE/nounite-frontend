const NewsLetter = () => {
  return (
    <div className="my-10 flex w-full justify-center items-center">
      <div className="bg-primary w-[90%] md:w-[80%] flex flex-col lg:flex-row px-6 justify-between items-center py-5 rounded-lg ">
        <h1 className="py-1 text-center text-white font-poppins text-xl md:text-2xl ">
          Subscribe To Our Newsletters
        </h1>

        <div className="flex overflow-hidden lg:flex-row flex-col rounded-sm w-[60%] bg-slate-100 lg:justify-between px-1 py-1 justify-center items-center">
          <input 
            type="text"
            className="h-[3rem] md:h-[3rem] font-poppins  outline-none lg:w-[70%] bg-slate-100 px-6 "
            placeholder="your email address"
          />
            <button
              className="bg-btnColor lg:mt-0 mt-[1.5rem] lg:w-[25%] text-base font-poppins text-slate-100 lg:relative placeholder:text-[#fff] py-2 px-5 font-bold rounded-md z-50"
              type="submit"
            >
              Subscribe Now
            </button>
        </div>
      </div>

    </div>

  );
};

export default NewsLetter;