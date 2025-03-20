import { FaXTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa6";
import svg from "../../assets/trip-x.svg"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-transparent text-center backdrop-blur-3xl ">
      <div className="flex  text-3xl text-white items-center justify-center">
      <img src={svg} className="w-12 h-auto mx-2" />
      trip-X
      </div>

      <div className="mt-3">
        <p className="text-gray-200">
          Your AI-powered travel partner, simplifying your journeys effortlessly.
        </p>
        <p className="text-gray-300">© {year} Trip-X AI. All rights reserved.</p>
      </div>

      <div className="mt-3 flex justify-center space-x-4">
        <a href="https://x.com/rishabh21g" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaXTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rishabh-gupta-157629166" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/rishabh21g_/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:rg2845628@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/rishabh21g" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaGithub size={24} />
        </a>
      </div>

      <div className="mt-4 text-gray-400 text-sm">
        Made with ❤️ by <span className="text-white font-semibold">Rishabh Gupta</span>
      </div>
    </footer>
  );
};

export default Footer;
