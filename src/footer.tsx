function Footer() {
  return (
    <footer className="flex justify-center items-center bg-gray-600 h-12 mt-4">
      <p className="text-white text-xl">
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/EmilJohanssonz">Emil Håkanzon</a>
      </p>
    </footer>
  );
}

export default Footer;
