const About = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 ml-6 gap-4 mt-10 mr-4">
      <div className="">
        <h2 className="text-2xl font-bold text-rose-800 mb-4">
          Connect instantly
        </h2>
        <p className=" font-thin border-solid p-2 border border-gray-500 ">
          Swipe, match and connect with people who share your interests.
          BuddyBurst makes meeting like-minded individuals like a breeze.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-rose-800 mb-4">
          Discover shared hobbies
        </h2>
        <p className="font-thin border-solid p-2 border border-gray-500">
          Explore a world of shared hobbies and activities. From movie nights to
          outdoor adventures, discover friends who love what you love.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-rose-800 mb-4">
          Meaningful Conversation
        </h2>
        <p className="font-thin border-solid p-2 border border-gray-500">
          Engage in genuine conversation. BuddyBurst encourages meaningful
          interactions, fostering friendships thst goes beyond the surface.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-rose-800 mb-4">
          Events and meetups
        </h2>
        <p className="font-thin border-solid p-2 border border-gray-500 mb-4">
          Be part of exciting events and local meetups. Whether it's a cozy
          cofee chat or a thrilling group activities, BuddyBurst bring people
          together.
        </p>
      </div>
    </div>
  );
};

export default About;
