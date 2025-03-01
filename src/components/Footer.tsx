import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Sierra Leone MDA Directory</h2>
            <p className="text-gray-400 text-sm">
              A comprehensive directory of Ministry Departmental Agencies in Sierra Leone.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 mb-2">
              &copy; {currentYear} Sierra Leone MDA Directory. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <p>
            Disclaimer: While we strive to keep all information accurate and up-to-date, 
            please verify critical information directly with the respective agencies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;