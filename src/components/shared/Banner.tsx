import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      <Image
        src="/tours-banner.jpg"
        alt="Tours Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Explore Our Tours
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Discover authentic experiences across Jamaica
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
