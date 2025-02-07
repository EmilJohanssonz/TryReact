function Activity() {
  const active1 = "Golf";
  const active2 = "Gym";
  const active3 = "Walk";

  return (
    <ul className="flex justify-center items-center flex-col p-6 -mt-42 space-y-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl max-w-xs mx-auto">
    <h3 className="text-xl text-gray-50 font-mono italic">My favorite activity:</h3>
      <li className="text-lg font-semibold text-white bg-gray-800 px-4 py-2 rounded-full shadow-md">
        Football
      </li>
      <li className="text-lg font-semibold text-white bg-gray-800 px-4 py-2 rounded-full shadow-md">
        {active1}
      </li>
      <li className="text-lg font-semibold text-white bg-gray-800 px-4 py-2 rounded-full shadow-md">
        {active2}
      </li>
      <li className="text-lg font-semibold text-white bg-gray-800 px-4 py-2 rounded-full shadow-md">
        {active3.toUpperCase()}
      </li>
    </ul>
  );
}

export default Activity;
