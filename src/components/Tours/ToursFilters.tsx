"use client";

import DropdownSelect from "./DropdownSelect";

interface FiltersProps {
  onCategoryChange?: (category: string) => void;
  onLocationChange?: (location: string) => void;
  onParishChange?: (parish: string) => void;
  onDurationChange?: (duration: string) => void;
  onDifficultyChange?: (difficulty: string) => void;
}

export function ToursFilters({
  onCategoryChange,
  onLocationChange,
  onParishChange,
  onDurationChange,
  onDifficultyChange,
}: FiltersProps) {
  const categories = [
    "All Categories",
    "Adventure",
    "Beach Tours",
    "Water Sports",
    "Cultural",
  ];
  const locations = [
    "Select your hotel area",
    "Ocho Rios",
    "Montego Bay",
    "Negril",
    "Kingston",
    "Port Antonio",
  ];
  const parishes = [
    "All Parishes",
    "St. Ann",
    "Trelawny",
    "St. James",
    "Portland",
    "Kingston",
  ];
  const durations = [
    "Any Duration",
    "2-4 hours",
    "4-6 hours",
    "6-8 hours",
    "Full Day",
  ];
  const difficulties = ["Any Level", "Easy", "Moderate", "Challenging"];

  return (
    <aside className="w-full md:w-72 bg-gray-50 p-6 md:p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Filters</h2>
      <DropdownSelect
        label="Category"
        options={categories}
        name="category"
        onChange={onCategoryChange}
      />
      <DropdownSelect
        label="Your Pickup Location"
        options={locations}
        name="location"
        onChange={onLocationChange}
      />
      <DropdownSelect
        label="Parish"
        options={parishes}
        name="parish"
        onChange={onParishChange}
      />
      <DropdownSelect
        label="Duration"
        options={durations}
        name="duration"
        onChange={onDurationChange}
      />
      <DropdownSelect
        label="Difficulty"
        options={difficulties}
        name="difficulty"
        onChange={onDifficultyChange}
      />
    </aside>
  );
}
