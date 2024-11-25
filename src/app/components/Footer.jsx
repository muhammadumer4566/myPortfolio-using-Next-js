import { FaFacebookF, FaGithub, FaIndent, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MUHAMMAD UMER</h2>
            <p className="text-slate-400">
              Creating impactful designs and intuitive user experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Muhammad-Umer/pfbid0ke5o3WgPobs1v17Hwg72kHmypr3hZpEFrMTcapaTUWr8VemMELVc3EiAMch66vwHl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://github.com/muhammadumer4566"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/muhammad-umer-2857a5285/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaIndent size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
