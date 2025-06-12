"use client";

interface MenuNavigationProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: { id: string; name: string }[];
}

export default function MenuNavigation({
  activeCategory,
  setActiveCategory,
  categories,
}: MenuNavigationProps) {
  return (
    <div className="sticky top-16 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto py-4 space-x-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-gray-300 hover:text-amber-400"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
