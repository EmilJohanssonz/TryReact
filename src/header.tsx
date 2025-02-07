function Header() {
return (
  <>
    <nav className="bg-gray-800 p-4">
    <h1 className="text-center text-3xl font-bold my-4 text-white">Emil Håkanzon</h1>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
      <hr className="mt-4 border-gray-600" />
    </nav>
  </>
);
};

export default Header