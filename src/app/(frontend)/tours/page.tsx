"use client";

import Banner from "@/components/shared/Banner";
import { TourCard } from "@/components/Tours/TourCard";
import { ToursFilters } from "@/components/Tours/ToursFilters";
import { useState, useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import img from "../../../assets/images/img1.jpeg";
import { StaticImageData } from "next/image";

interface Tour {
  id: string;
  title: string;
  location: string;
  parish: string;
  image: StaticImageData;
  rating: number;
  reviewCount: number;
  price: number;
  category: string;
  duration: string;
  difficulty: string;
}

const SAMPLE_TOURS: Tour[] = [
  {
    id: "1",
    title: "Blue Hole & Dunn's River Falls Combo Tour",
    location: "Ocho Rios",
    parish: "St. Ann",
    image: img,
    rating: 5,
    reviewCount: 24,
    price: 89,
    category: "Adventure",
    duration: "6-8 hours",
    difficulty: "Moderate",
  },
  {
    id: "2",
    title: "Martha Brae Bamboo River Rafting",
    location: "Trelawny",
    parish: "Trelawny",
    image: img,
    rating: 4,
    reviewCount: 18,
    price: 65,
    category: "Water Sports",
    duration: "4-6 hours",
    difficulty: "Easy",
  },
  {
    id: "3",
    title: "Luminous Lagoon Night Tour",
    location: "Trelawny",
    parish: "Trelawny",
    image: img,
    rating: 0,
    reviewCount: 0,
    price: 75,
    category: "Beach Tours",
    duration: "4-6 hours",
    difficulty: "Easy",
  },
  {
    id: "4",
    title: "Mystic Mountain Sky Exploration",
    location: "Ocho Rios",
    parish: "St. Ann",
    image: img,
    rating: 5,
    reviewCount: 32,
    price: 95,
    category: "Adventure",
    duration: "6-8 hours",
    difficulty: "Challenging",
  },
  {
    id: "5",
    title: "Negril Beach Paradise Tour",
    location: "Negril",
    parish: "Westmoreland",
    image: img,
    rating: 4,
    reviewCount: 28,
    price: 55,
    category: "Beach Tours",
    duration: "4-6 hours",
    difficulty: "Easy",
  },
  {
    id: "6",
    title: "Dunn's River Falls Adventure",
    location: "Ocho Rios",
    parish: "St. Ann",
    image: img,
    rating: 5,
    reviewCount: 45,
    price: 72,
    category: "Adventure",
    duration: "4-6 hours",
    difficulty: "Moderate",
  },
  {
    id: "7",
    title: "Kingston Cultural Heritage Tour",
    location: "Kingston",
    parish: "Kingston",
    image: img,
    rating: 4,
    reviewCount: 15,
    price: 60,
    category: "Cultural",
    duration: "2-4 hours",
    difficulty: "Easy",
  },
  {
    id: "8",
    title: "Port Antonio Waterfall Adventure",
    location: "Port Antonio",
    parish: "Portland",
    image: img,
    rating: 5,
    reviewCount: 20,
    price: 80,
    category: "Adventure",
    duration: "6-8 hours",
    difficulty: "Challenging",
  },
  {
    id: "9",
    title: "Montego Bay Water Sports Combo",
    location: "Montego Bay",
    parish: "St. James",
    image: img,
    rating: 4,
    reviewCount: 22,
    price: 85,
    category: "Water Sports",
    duration: "6-8 hours",
    difficulty: "Moderate",
  },
  {
    id: "10",
    title: "Crater Lake & Coffee Plantation Tour",
    location: "Ocho Rios",
    parish: "St. Ann",
    image: img,
    rating: 5,
    reviewCount: 19,
    price: 78,
    category: "Cultural",
    duration: "4-6 hours",
    difficulty: "Easy",
  },
  {
    id: "11",
    title: "Island Grill & Sunset Catamaran",
    location: "Montego Bay",
    parish: "St. James",
    image: img,
    rating: 5,
    reviewCount: 35,
    price: 92,
    category: "Beach Tours",
    duration: "6-8 hours",
    difficulty: "Easy",
  },
  {
    id: "12",
    title: "Island Grill & Sunset Catamaran",
    location: "Montego Bay",
    parish: "St. James",
    image: img,
    rating: 5,
    reviewCount: 35,
    price: 92,
    category: "Beach Tours",
    duration: "6-8 hours",
    difficulty: "Easy",
  },
  {
    id: "13",
    title: "Island Grill & Sunset Catamaran",
    location: "Montego Bay",
    parish: "St. James",
    image: img,
    rating: 5,
    reviewCount: 35,
    price: 92,
    category: "Beach Tours",
    duration: "6-8 hours",
    difficulty: "Easy",
  },
];

type SortOption = "popularity" | "price-low" | "price-high" | "rating";

const ToursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState(
    "Select your hotel area",
  );
  const [selectedParish, setSelectedParish] = useState("All Parishes");
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Any Level");
  const [sortBy, setSortBy] = useState<SortOption>("popularity");

  const filteredAndSortedTours = useMemo(() => {
    const filtered = SAMPLE_TOURS.filter((tour) => {
      const matchesSearch = tour.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" ||
        tour.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "Select your hotel area" ||
        tour.location === selectedLocation;
      const matchesParish =
        selectedParish === "All Parishes" || tour.parish === selectedParish;
      const matchesDuration =
        selectedDuration === "Any Duration" ||
        tour.duration === selectedDuration;
      const matchesDifficulty =
        selectedDifficulty === "Any Level" ||
        tour.difficulty === selectedDifficulty;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesParish &&
        matchesDuration &&
        matchesDifficulty
      );
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating || b.reviewCount - a.reviewCount;
        case "popularity":
        default:
          return b.reviewCount - a.reviewCount;
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedLocation,
    selectedParish,
    selectedDuration,
    selectedDifficulty,
    sortBy,
  ]);

  return (
    <main className="w-full">
      <Banner />

      <div className="bg-gray-100 min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-72 h-fit sticky top-28">
              <ToursFilters
                onCategoryChange={setSelectedCategory}
                onLocationChange={setSelectedLocation}
                onParishChange={setSelectedParish}
                onDurationChange={setSelectedDuration}
                onDifficultyChange={setSelectedDifficulty}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <FaSearch
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search tours by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              {/* Results Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <p className="text-gray-700">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredAndSortedTours.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold">{SAMPLE_TOURS.length}</span>{" "}
                  tours
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Sort by:</span>
                  <div className="relative">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition flex items-center gap-2">
                      <span className="capitalize">
                        {sortBy === "popularity" && "Popularity"}
                        {sortBy === "price-low" && "Price: Low to High"}
                        {sortBy === "price-high" && "Price: High to Low"}
                        {sortBy === "rating" && "Highest Rated"}
                      </span>
                      <BiChevronDown size={18} />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 hidden group-hover:block">
                      <button
                        onClick={() => setSortBy("popularity")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Popularity
                      </button>
                      <button
                        onClick={() => setSortBy("price-low")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Price: Low to High
                      </button>
                      <button
                        onClick={() => setSortBy("price-high")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => setSortBy("rating")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Highest Rated
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tours Grid */}
              {filteredAndSortedTours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedTours.map((tour) => (
                    <TourCard key={tour.id} {...tour} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No tours found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ToursPage;
