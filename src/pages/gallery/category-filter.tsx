"use client";

import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: { id: string; name: string }[];
}

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
  categories,
}: CategoryFilterProps) {
  return (
    <section className="py-8 px-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-amber-600 hover:bg-amber-700 text-white"
                  : "border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
