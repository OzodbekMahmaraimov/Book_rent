import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Biz haqimizda
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Xizmatlar
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-500 hover:text-gray-900">
              Biz bilan bog'lanish
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <FaTelegram fontSize={20} className="text-gray-500" cursor="pointer" />
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 Workflow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
