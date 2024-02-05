import Header from "../components/Header";

const Goals = () => {
  return (
    <div className=" justify-center items-center mr-6">
      <h1 className=" text-black font-bold text-3xl lg:flex-nowrap flex flex-wrap justify-center items-center">
        Core Values
      </h1>
      <p className=" text-slate-600 px-6 mb-2 mt-4 ml-4">
        <span className=" text-black font-bold text-xl ">Authenticity:</span> We
        believe in being genuine and true to oneself. BuddyBurst is a space
        where you can be exactly who you are.
      </p>
      <p className="text-slate-600 px-6 mb-2 mt-2 ml-4">
        <span className="text-black font-bold text-xl">Inclusivity:</span>{" "}
        Diversity is at the heart of BuddyBurst. We celebrate differences and
        strive to create an inclusive environment where everyone feels welcome.
      </p>
      <p className="text-slate-600 px-6 mb-2 mt-2 ml-4">
        <span className="text-black font-bold text-xl">Friendship First:</span>{" "}
        For us, it's not just about connections; it's about cultivating genuine
        friendships. We value the quality of relationships over quantity
      </p>
    </div>
  );
};

export default Goals;
