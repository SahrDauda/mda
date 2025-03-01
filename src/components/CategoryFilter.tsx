import React from 'react';
import { mdaCategories } from '../data/mdas';

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full text-sm ${
            selectedCategory === ''
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setSelectedCategory('')}
        >
          All
        </button>
        {mdaCategories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;