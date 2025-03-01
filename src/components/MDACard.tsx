import React, { useState } from 'react';
import { MDA } from '../data/mdas';
import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

interface MDACardProps {
  mda: MDA;
}

const MDACard: React.FC<MDACardProps> = ({ mda }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-2">
              {mda.category}
            </span>
            <h3 className="text-xl font-bold text-gray-800">{mda.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{mda.acronym}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500 hover:text-green-600 focus:outline-none"
            aria-label={expanded ? "Collapse details" : "Expand details"}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{mda.description}</p>
        
        <div className="flex items-center text-gray-600 mb-2">
          <Phone size={16} className="mr-2 text-green-600" />
          <span className="text-sm">{mda.contacts.phone[0]}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <Mail size={16} className="mr-2 text-green-600" />
          <span className="text-sm">{mda.contacts.email[0]}</span>
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Contact Information</h4>
              
              {mda.contacts.phone.length > 1 && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Phone Numbers:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-1">
                    {mda.contacts.phone.map((phone, index) => (
                      <li key={index}>{phone}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {mda.contacts.email.length > 1 && (
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700">Email Addresses:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-1">
                    {mda.contacts.email.map((email, index) => (
                      <li key={index}>{email}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {mda.contacts.website && (
                <div className="flex items-center text-gray-600 mb-3">
                  <Globe size={16} className="mr-2 text-green-600" />
                  <a 
                    href={mda.contacts.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {mda.contacts.website}
                  </a>
                </div>
              )}
              
              <div className="flex items-start text-gray-600 mb-3">
                <MapPin size={16} className="mr-2 mt-1 text-green-600 flex-shrink-0" />
                <span className="text-sm">{mda.address}</span>
              </div>
              
              {mda.socialMedia && Object.keys(mda.socialMedia).length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Social Media:</p>
                  <div className="flex space-x-3">
                    {mda.socialMedia.facebook && (
                      <a 
                        href={mda.socialMedia.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                        aria-label="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {mda.socialMedia.twitter && (
                      <a 
                        href={mda.socialMedia.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {mda.socialMedia.instagram && (
                      <a 
                        href={mda.socialMedia.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {mda.socialMedia.linkedin && (
                      <a 
                        href={mda.socialMedia.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-700"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MDACard;