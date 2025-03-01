import React from 'react';
import { MDA } from '../data/mdas';
import MDACard from './MDACard';

interface MDAsGridProps {
  mdas: MDA[];
}

const MDAsGrid: React.FC<MDAsGridProps> = ({ mdas }) => {
  if (mdas.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-medium text-gray-600">No agencies found matching your search criteria.</h3>
        <p className="text-gray-500 mt-2">Try adjusting your search or filter settings.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mdas.map((mda) => (
        <MDACard key={mda.id} mda={mda} />
      ))}
    </div>
  );
};

export default MDAsGrid;