import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10 px-6">
      <div className="flex-grow">
        <h2 className=" justify-center font-extrabold text-3xl">
          Connect and make lifelong friends with{" "}
          <span className=" text-rose-800 text-4xl font-semibold">
            BuddyBurst
          </span>
        </h2>
        <p className="mb-4 mt-4 font-light">
          Making friiends is easy, fun and meaningful. Join BuddyBurst to expand
          your social circle and create lasting connections with like-minded
          people.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
