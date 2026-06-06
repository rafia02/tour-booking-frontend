import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20 md:pt-28 pb-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/04/24/37088-413229662_large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Softer premium overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        {/* Trust row */}
        <div className="flex items-center gap-3 mb-4 text-white/90 text-sm">
          <span className="px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            ⭐ 4.9/5 Rated Experience
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Discover the{" "}
          <span className="bg-gradient-to-r from-[#2ECC71] to-[#F5C542] bg-clip-text text-transparent">
            Ultimate Travel
          </span>{" "}
          Experience
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
          Private tours, hidden beaches, waterfalls, and authentic Jamaican
          culture led by trusted local guides across the island.
        </p>

        {/* CTA */}
        <div className="flex flex-row gap-4 mb-10">
          <button className="text-sm md:text-base bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-semibold px-6 px-md-10 py-3 py-md-4 rounded-full hover:scale-105 transition">
            Find Tours
          </button>

          <button className="text-sm md:text-base border border-white/60 text-white px-6 px-md-10 py-3 py-md-4 rounded-full hover:bg-white hover:text-black transition">
            Watch Video
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              Local Experts
            </h3>
            <p className="text-sm text-white/70">Certified island guides</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              Private Tours
            </h3>
            <p className="text-sm text-white/70">
              Fully personalized experience
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-4">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              Transparent Pricing
            </h3>
            <p className="text-sm text-white/70">No hidden charges ever</p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-[#2ECC71] to-[#F5C542] rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 transition">
        <FiMessageCircle className="w-7 h-7" />
      </button>
    </section>
    // <section className="relative flex items-center justify-center overflow-hidden pt-20 md:pt-24">
    //   <div className="absolute inset-0 z-0 overflow-hidden">
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       playsInline
    //       className="absolute inset-0 w-full h-full object-cover scale-110"
    //     >
    //       <source
    //         src="https://cdn.pixabay.com/video/2020/04/24/37088-413229662_large.mp4"
    //         type="video/mp4"
    //       />
    //     </video>

    //     {/* Dark Overlay */}
    //     <div className="absolute inset-0 bg-black/55"></div>
    //   </div>

    //   {/* Content */}
    //   <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
    //     {/* Trust Badge */}
    //     <div className="mb-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
    //       ⭐ Trusted by 10,000+ travelers worldwide
    //     </div>

    //     {/* Main Headline */}
    //     <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-3">
    //       Discover the
    //       <span
    //         className=" mx-1 sm:mx-2 bg-gradient-to-r from-[#2ECC71] via-[#FFD700] to-[#2ECC71] bg-clip-text text-transparent font-black drop-shadow-lg "
    //         style={{
    //           textShadow:
    //             "0 0 30px rgba(46, 204, 113, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)",
    //         }}
    //       >
    //         Ultimate Travel
    //       </span>
    //       Experience
    //     </h1>

    //     {/* Subheadline */}
    //     <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
    //       Private tours, hidden beaches, waterfalls, and authentic Jamaican
    //       culture led by trusted local guides. Explore the island like never
    //       before.
    //     </p>

    //     {/* CTA Buttons */}
    //     <div className="flex flex-col sm:flex-row gap-4 mb-12">
    //       <button className="bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-bold text-lg px-10 py-4 rounded-full transition-transform hover:scale-105">
    //         Find Tours
    //       </button>

    //       <button className="border border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-10 py-4 rounded-full transition-all">
    //         Watch Video
    //       </button>
    //     </div>

    //     {/* Feature Cards */}
    //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-white">
    //       <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg  rounded-xl p-4">
    //         <h3 className="font-semibold text-lg mb-1">Local Experts</h3>
    //         <p className="text-sm text-white/80">
    //           Certified guides with deep island knowledge
    //         </p>
    //       </div>

    //       <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-4">
    //         <h3 className="font-semibold text-lg mb-1">Private Tours</h3>
    //         <p className="text-sm text-white/80">
    //           Fully personalized travel experience
    //         </p>
    //       </div>

    //       <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl p-4">
    //         <h3 className="font-semibold text-lg mb-1">No Hidden Fees</h3>
    //         <p className="text-sm text-white/80">Transparent pricing, always</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Floating Chat Button */}
    //   <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-xl transition-all">
    //     <FiMessageCircle className="w-8 h-8" />
    //   </button>
    // </section>
  );
};

export default Hero;
