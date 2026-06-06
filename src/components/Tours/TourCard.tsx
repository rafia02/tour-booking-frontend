"use client";

import Image from "next/image";
import { BiMapPin, BiStar } from "react-icons/bi";

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  parish: string;
  image: string;
  rating: number;
  reviewCount: number;
  price?: number;
}

export function TourCard({
  id,
  title,
  location,
  parish,
  image,
  rating,
  reviewCount,
  price,
}: TourCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <BiMapPin size={18} className="text-gray-500 flex-shrink-0" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <BiMapPin size={18} className="text-gray-500 flex-shrink-0" />
          <span className="text-sm">{parish}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <BiStar
                key={i}
                size={16}
                className={
                  i < Math.round(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 italic ml-2">
            {reviewCount === 0 ? "No reviews" : `${reviewCount} reviews`}
          </span>
        </div>
        {price && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-lg font-bold text-green-500">From ${price}</p>
          </div>
        )}
      </div>
    </div>
  );
}
