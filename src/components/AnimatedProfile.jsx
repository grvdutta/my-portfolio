import profile from "../assets/profile.jpg";

function AnimatedProfile() {
  const pillClass =
    "absolute bg-black border border-cyan-400 rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white shadow-[0_0_15px_rgba(34,211,238,0.5)]";

  return (
    <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[500px] md:h-[500px] mx-auto">

      {/* Outer Glow Ring */}
      <div className="absolute w-56 h-56 md:w-96 md:h-96 rounded-full border-2 border-cyan-400 animate-spin-slow shadow-[0_0_50px_rgba(34,211,238,0.8)]" />

      {/* Secondary Ring */}
      <div className="absolute w-64 h-64 md:w-[420px] md:h-[420px] rounded-full border border-cyan-800" />

      {/* Profile Image */}
      <div className="relative z-10 w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.8)]">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top */}
      <div className={`${pillClass} top-0 left-1/2 -translate-x-1/2`}>
        React
      </div>

      {/* Bottom */}
      <div className={`${pillClass} bottom-0 left-1/2 -translate-x-1/2`}>
        Python
      </div>

      {/* Left */}
      <div className={`${pillClass} left-0 top-1/2 -translate-y-1/2`}>
        JS
      </div>

      {/* Right */}
      <div className={`${pillClass} right-0 top-1/2 -translate-y-1/2`}>
        Canva
      </div>

      {/* Show extra pills only on desktop */}
      <div className={`${pillClass} hidden md:block left-8 top-24`}>
        Java
      </div>

      <div className={`${pillClass} hidden md:block right-8 top-24`}>
        Tailwind
      </div>

    </div>
  );
}

export default AnimatedProfile;