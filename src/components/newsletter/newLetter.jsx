const NewsLetter = () => {
  return ( 
    <div className="my-10 flex w-full justify-center items-center">
      <div className="bg-primary w-[90%] md:w-[80%] flex flex-col  lg:flex-row px-10 justify-center items-center py-10 rounded-lg ">
        <h1 className="w-full py-3 text-center lg:w-1/2  text-white font-poppins text-2xl mx-20">Subscribe to Newsletters</h1>
        <div className="w-full flex lg:flex-row flex-col lg:justify-center justify-center items-center">
          <input type="text"
            className="lg:w-[100%] h-[3rem] md:h-[4rem] rounded-lg outline-none bg-slate-100 pl-4 w-[90%]"
            placeholder="your email address"
          />
          <div className="flex justify-center items-center">
            <button className="bg-btnColor w-[10rem] lg:mt-0 mt-[1.5rem] text-slate-100 lg:relative lg:right-[11rem] placeholder:text-[#fff] py-2 px-5 font-bold rounded-lg z-50" type="submit">Subscribe Now</button>  
          </div>
        </div> 
      </div>

    </div>
              
  );
};
 
export default NewsLetter;