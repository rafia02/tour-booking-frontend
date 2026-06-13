"use client";

import { Tour } from "@/types/tour.types";
import { useMemo, useState } from "react";
import { ToursFilters } from "./ToursFilters";
import { TourCard } from "./TourCard";

interface Props {
  tours: Tour[];
}

type SortOption = "popularity" | "price-low" | "price-high";

export default function ToursClient({ tours = [] }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const [selectedLocation, setSelectedLocation] = useState("All Cities");

  const [selectedParish, setSelectedParish] = useState("All Parishes");

  const [selectedDifficulty, setSelectedDifficulty] = useState("Any Level");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesSearch = tour.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        tour.category === selectedCategory;

      const matchesCity =
        selectedLocation === "All Cities" || tour.city === selectedLocation;

      const matchesParish =
        selectedParish === "All Parishes" || tour.parish === selectedParish;

      const matchesDifficulty =
        selectedDifficulty === "Any Level" ||
        tour.difficulty === selectedDifficulty;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCity &&
        matchesParish &&
        matchesDifficulty
      );
    });
  }, [
    tours,
    searchQuery,
    selectedCategory,
    selectedLocation,
    selectedParish,
    selectedDifficulty,
  ]);

  return (
    <>
      <ToursFilters
        onCategoryChange={setSelectedCategory}
        onLocationChange={setSelectedLocation}
        onParishChange={setSelectedParish}
        onDifficultyChange={setSelectedDifficulty}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((tour) => (
          <TourCard key={tour._id} {...tour} />
        ))}
      </div>
    </>
  );
}
