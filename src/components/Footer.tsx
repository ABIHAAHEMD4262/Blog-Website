const Footer = () => {
  return (
    <footer className="bg-white text-sky-950 py-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-xl text-center">
          &copy; {new Date().getFullYear()} Abiha Blogs. All rights reserved. | Designed with ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;