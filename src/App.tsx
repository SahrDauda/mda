import React, { useState, useMemo } from 'react';
import { mdas } from './data/mdas';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import MDAsGrid from './components/MDAsGrid';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMDAs = useMemo(() => {
    return mdas.filter((mda) => {
      const matchesSearch = 
        searchTerm === '' || 
        mda.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === '' || 
        mda.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Agency Contact Information</h2>
          <p className="text-gray-600">
            Access accurate contact details for all Ministry Departmental Agencies (MDAs) in Sierra Leone.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 flex-shrink-0">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">About This Directory</h3>
              <p className="text-sm text-gray-600 mb-3">
                This directory provides up-to-date contact information for government agencies in Sierra Leone.
              </p>
              <p className="text-sm text-gray-600">
                Found incorrect information? Please contact us to report any inaccuracies.
              </p>
            </div>
          </div>
          
          <div className="flex-grow">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredMDAs.length}</span> agencies
                {selectedCategory && <span> in <span className="font-medium">{selectedCategory}</span></span>}
                {searchTerm && <span> matching "<span className="font-medium">{searchTerm}</span>"</span>}
              </p>
            </div>
            
            <MDAsGrid mdas={filteredMDAs} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;