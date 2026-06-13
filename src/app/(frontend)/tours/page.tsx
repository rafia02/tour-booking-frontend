import Banner from "@/components/shared/Banner";
import ToursClient from "@/components/Tours/ToursClient";
import { getTours } from "@/lib/getTours";
import React from "react";

const page = async () => {
  const tours = await getTours();
  return (
    <div>
      <Banner />

      <ToursClient tours={tours} />
    </div>
  );
};

export default page;
