export interface Tour {
  _id: string;
  title: string;
  category: string;
  durationHours: number;
  city: string;
  parish: string;
  overview: string;
  difficulty: string;
  featured: boolean;
  pickupIncluded: boolean;

  images: string[];

  pricing: {
    fixedPricing: {
      adultPrice: number;
      childPrice: number;
    };

    pricingType: "fixed" | "dynamic";

    transportPricing: {
      city: string;
      price: number;
    }[];

    entranceFeePerPerson: number;
    minGuestsCharged: number;
    oddNumberPricing: boolean;
  };
}
