"use client";

import DropdownSelect from "./DropdownSelect";

interface FiltersProps {
  categories: string[];
  cities: string[];
  parishes: string[];
  difficulties: string[];

  onCategoryChange?: (category: string) => void;
  onLocationChange?: (location: string) => void;
  onParishChange?: (parish: string) => void;
  onDifficultyChange?: (difficulty: string) => void;
}

export function ToursFilters({
  categories = [],
  cities = [],
  parishes = [],
  difficulties = [],
  onCategoryChange,
  onLocationChange,
  onParishChange,
  onDifficultyChange,
}: FiltersProps) {
  return (
    <aside className="w-full lg:w-72 bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Filters</h2>

      <DropdownSelect
        label="Category"
        name="category"
        options={["All Categories", ...categories]}
        onChange={onCategoryChange}
      />

      <DropdownSelect
        label="City"
        name="city"
        options={["All Cities", ...cities]}
        onChange={onLocationChange}
      />

      <DropdownSelect
        label="Parish"
        name="parish"
        options={["All Parishes", ...parishes]}
        onChange={onParishChange}
      />

      <DropdownSelect
        label="Difficulty"
        name="difficulty"
        options={["All Levels", ...difficulties]}
        onChange={onDifficultyChange}
      />
    </aside>
  );
}
