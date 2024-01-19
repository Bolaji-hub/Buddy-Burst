import people from "../assets/people.jpg";

const Hero = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10 px-6">
      <div className="flex-grow basis-[550px]">
        <h2 className=" justify-center font-extrabold text-3xl">
          Connect and make lifelong friends with{" "}
          <span className=" text-rose-800 text-4xl font-semibold">
            BuddyBurst
          </span>
        </h2>
        <p className="mb-4 mt-4 font-light">
          Making friiends is easy, fun and meaningful. Join{" "}
          <span className="text-rose-500">BuddyBurst</span> to expand your
          social circle and create lasting connections with like-minded people.
        </p>
        <button className=" text-slate-700 font-bold bg-rose-800 px-6 py-2 rounded-md hover:scale-105 duration-300 cursor-pointer ml-4 text-xl ">
          Get Started
        </button>
      </div>
      <img
        src={people}
        alt=""
        className=" border-solid flex-grow rounded-lg size-80"
      />
    </div>
  );
};

export default Hero;
