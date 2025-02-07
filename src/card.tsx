import assest from "./assest/Skärmbild 2024-12-13 140423.png";

function Card() {
  return (
    <div className=" -mt-20 flex justify-center items-center min-h-screen drop-shadow-xl ">
      <div className="bg-white  rounded-lg p-4 max-w-xs hover:bg-gray-100 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <img
            src={assest}
            alt="profile picture"
            className="w-24 h-24 rounded-full"
          />
          <h2 className="text-xl font-semibold mt-2 cursor-pointer">
            Emil Håkanzon
          </h2>
          <p className="text-gray-600 text underline">
            Frontend Developer Study
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
