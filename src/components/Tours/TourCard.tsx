"use client";

import Image from "next/image";
import Link from "next/link";
import { BiMapPin, BiStar, BiTime } from "react-icons/bi";
import img from "@/assets/images/login-bg.jpg";

interface TourCardProps {
  _id: string;
  title: string;
  city: string;
  parish: string;
  images: string[];
  durationHours: number;
  difficulty: string;
  pricing: {
    fixedPricing: {
      adultPrice: number;
    };
  };
}

export function TourCard({
  _id,
  title,
  city,
  parish,
  images,
  durationHours,
  difficulty,
  pricing,
}: TourCardProps) {
  return (
    <Link href={`/tours/${_id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 h-full">
        {/* Image */}
        <div className="relative h-64 w-full">
          <Image
            // src={images?.[0] || "/placeholder.jpg"}
            src={img}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-4">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <BiMapPin className="text-green-600" size={18} />
            <span className="text-sm">
              {city}, {parish}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <BiTime className="text-green-600" size={18} />
            <span className="text-sm">{durationHours} Hours</span>
          </div>

          {/* Difficulty */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs capitalize">
              {difficulty}
            </span>
          </div>

          {/* Static rating (later reviews থেকে আসবে) */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <BiStar
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

            <span className="text-sm text-gray-500 ml-2">New Tour</span>
          </div>

          {/* Price */}
          <div className="border-t pt-4 flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">From</p>

              <p className="text-2xl font-bold text-green-600">
                ${pricing.fixedPricing.adultPrice}
              </p>
            </div>

            <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
              View Tour
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
