import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-900 py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">AI Trip Planner Trip-X</h2>
          <p className="text-sm text-gray-600">Plan your trips effortlessly with AI! ✈️</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
          <a href="#tech" className="text-gray-600 hover:text-gray-900 transition">Tech Stack</a>
          <a href="#contribute" className="text-gray-600 hover:text-gray-900 transition">Contribute</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/rishabh21g" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-xl transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rishabh19g/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-xl transition">
            <FaLinkedin />
          </a>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} AI Trip Planner. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
