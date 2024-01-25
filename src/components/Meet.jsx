import nerd1 from "../assets/nerd1.jpg";
import nerd3 from "../assets/nerd3.jpg";
import nerd4 from "../assets/nerd4.jpg";

const Meet = () => {
  return (
    <div className="justify-center items-center mr-6 ">
      <h1 className=" text-black font-bold text-2xl flex  flex-wrap lg:flex-nowrap justify-center items-center mt-6">
        Meet The Team
      </h1>
      <p className=" justify-center items-center text-slate-600">
        {" "}
        Meet The Amazing People Behind The BuddyBurst
      </p>
      <div className=" grid lg:grid-cols-3 sm:grid-cols-1 rounded-md gap-4 mt-8 ml-4">
        <img src={nerd1} alt="" />
        <img src={nerd4} alt="" />
        <img src={nerd3} alt="" />
      </div>
    </div>
  );
};

export default Meet;
