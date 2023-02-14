import DefaultLayout from "../../layout/DefaultLayout";

const Waitlist = () => {
  return ( 
    <DefaultLayout >
      <div className="my-32 flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-8 bg-primary w-[60%] shadow-sm rounded">
          <h2 className="text-4xl text-textHover font-poppins font-semibold py-5 ">
            Coming Soon!
          </h2>
          <p className="text-center text-paragraphColor text-md pb-2 w-[60%]">
            Please give us some time to complete our work on it.
            To learn more about some of our features for the time being, 
            subscribe to our newsletter.
          </p>
          <form onSubmit={(e) => { e.preventDefault; }} action="">
            
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};
 
export default Waitlist;