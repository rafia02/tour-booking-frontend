import { Tour } from "@/types/tour.types";

export const getTours = async (): Promise<Tour[]> => {
  const res = await fetch("http://localhost:5000/api/v1/tours", {
    cache: "no-store", // SSR safe (important for dynamic API)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }

  const data = await res.json();

  return data.tours; // ✅ FIX HERE
};
