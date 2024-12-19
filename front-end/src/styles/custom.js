const colors = {
  gradients: {
    blueToPink: "bg-gradient-to-r from-blue-200 to-pink-200",
    blueToPinkHover: "hover:bg-gradient-to-r hover:from-blue-300 hover:to-pink-300",
    violetToYellow: "bg-gradient-to-r from-violet-500 to-yellow-500",
    greenToBlue: "bg-gradient-to-r from-green-400 to-blue-500",
    orangeToRed: "bg-gradient-to-r from-orange-400 to-red-500",
    tealToPurple: "bg-gradient-to-r from-teal-400 to-purple-600",
    cyanToIndigo: "bg-gradient-to-r from-cyan-300 to-indigo-400",
    pinkToYellow: "bg-gradient-to-r from-pink-500 to-yellow-500",
    pinkToYellowHover: "bg-gradient-to-r from-pink-400 to-yellow-400",
    sunset: "bg-gradient-to-r from-orange-300 via-red-300 to-pink-300",
    coolSky: "bg-gradient-to-r from-cyan-500 to-blue-700",
    oceanWave: "bg-gradient-to-r from-teal-300 to-blue-600",
    purpleToGreen: "bg-gradient-to-r from-purple-400 to-green-400",
    softRainbow: "bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200",
    fireGlow: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400",
    mintToLime: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400",
    frostToFlame: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500", // Gradient mới
    sunrise: "bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-500", // Gradient mới
  },
  textColors: {
    blue200: "text-blue-200",
    pink400: "text-pink-400",
    violet100: "text-violet-100",
    blueToPink: "bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent",
    fireGlowText: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent",
    mintToLimeText: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400 bg-clip-text text-transparent",
    frostToFlameText: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500 bg-clip-text text-transparent", // Gradient text mới
  },
  backgroundColors: {
    red300: "bg-red-300",
    white: "bg-white",
    gray: "bg-gray-50",
    gradientMintToLime: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400",
    gradientFireGlow: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400",
    gradientFrostToFlame: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500", // Background mới
  },
  button: {
    primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out",
    edit: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 rounded-full p-1 transition duration-200 ease-in-out",
    delete: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 rounded-full p-1 transition duration-200 ease-in-out",
    add: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 rounded-full p-1 transition duration-200 ease-in-out",
    secondary: "bg-gray-50 text-gray-800 hover:bg-gray-100 active:bg-gray-200 rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out",
    gradientBluePink: "bg-gradient-to-r from-blue-200 to-pink-200 hover:from-blue-300 hover:to-pink-300 active:from-blue-400 active:to-pink-400 text-white rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out",
    gradientVioletYellow: "bg-gradient-to-r from-violet-500 to-yellow-500 hover:from-violet-600 hover:to-yellow-600 active:from-violet-700 active:to-yellow-700 text-white rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out",
    gradientFireGlow: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 hover:from-red-600 hover:via-orange-600 hover:to-yellow-500 active:from-red-700 active:via-orange-700 active:to-yellow-600 text-white rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out", // Button mới
    gradientMintToLime: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400 hover:from-teal-300 hover:via-green-400 hover:to-lime-500 active:from-teal-400 active:via-green-500 active:to-lime-600 text-white rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out", // Button mới
    gradientFrostToFlame: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500 hover:from-blue-400 hover:via-purple-500 hover:to-red-600 active:from-blue-500 active:via-purple-600 active:to-red-700 text-white rounded-full p-2 pl-5 pr-5 transition duration-200 ease-in-out", // Button mới
    btngradientFireGlow: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 hover:from-red-600 hover:via-orange-600 hover:to-yellow-500 active:from-red-700 active:via-orange-700 active:to-yellow-600 text-white rounded-full p-1 pl-3 pr-3 transition duration-200 ease-in-out", // Button mới
    btngradientMintToLime: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400 hover:from-teal-300 hover:via-green-400 hover:to-lime-500 active:from-teal-400 active:via-green-500 active:to-lime-600 text-white rounded-full p-1 pl-3 pr-3 transition duration-200 ease-in-out", // Button mới
    btngradientFrostToFlame: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500 hover:from-blue-400 hover:via-purple-500 hover:to-red-600 active:from-blue-500 active:via-purple-600 active:to-red-700 text-white rounded-full p-1 pl-3 pr-3 transition duration-200 ease-in-out", // Button mới
    btnBluePink: "bg-gradient-to-r from-blue-200 to-pink-200 hover:from-blue-300 hover:to-pink-300 active:from-blue-400 active:to-pink-400 text-white rounded-full p-2 transition duration-200 ease-in-out",
    btnVioletYellow: "bg-gradient-to-r from-violet-500 to-yellow-500 hover:from-violet-600 hover:to-yellow-600 active:from-violet-700 active:to-yellow-700 text-white rounded-full p-2 transition duration-200 ease-in-out",
    btnFireGlow: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 hover:from-red-600 hover:via-orange-600 hover:to-yellow-500 active:from-red-700 active:via-orange-700 active:to-yellow-600 text-white rounded-full p-2 transition duration-200 ease-in-out", // Button mới
    btnMintToLime: "bg-gradient-to-r from-teal-200 via-green-300 to-lime-400 hover:from-teal-300 hover:via-green-400 hover:to-lime-500 active:from-teal-400 active:via-green-500 active:to-lime-600 text-white rounded-full p-2  transition duration-200 ease-in-out", // Button mới
    btnFrostToFlame: "bg-gradient-to-r from-blue-300 via-purple-400 to-red-500 hover:from-blue-400 hover:via-purple-500 hover:to-red-600 active:from-blue-500 active:via-purple-600 active:to-red-700 text-white rounded-full p-2  transition duration-200 ease-in-out", // Button mới
  },
};

export default colors;  