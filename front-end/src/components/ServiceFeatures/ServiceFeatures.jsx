import { ArrowLeftRight, Truck, HeadphonesIcon } from "lucide-react";

export default function ServiceFeatures() {
  const services = [
    {
      icon: (
        <ArrowLeftRight className="w-12 h-12 transition-all hover:rotate-180" />
      ),
      title: "30 DAYS RETURN",
      description: "Simply return it within 30 days for an exchange.",
      bgGradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Truck className="w-12 h-12 transition-all hover:translate-x-6" />,
      title: "FREE US DELIVERY",
      description: "On orders over $200!",
      bgGradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700",
    },
    {
      icon: (
        <HeadphonesIcon className="w-12 h-12 transition-all hover:scale-110" />
      ),
      title: "SUPPORT 24/7",
      description: "Contact us 24 hours a day, 7 days a week",
      bgGradient: "from-pink-500 to-pink-600",
      hoverGradient: "from-pink-600 to-pink-700",
    },
  ];

  return (
    <div className=" mx-auto px-4 py-16 container ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-2xl 
              bg-gradient-to-r ${service.bgGradient}
              hover:bg-gradient-to-r ${service.hoverGradient}
              transform hover:-translate-y-1 transition-all duration-300
              shadow-lg hover:shadow-xl
            `}
          >
            <div className="p-8 text-white">
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon with animated background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-lg transform animate-pulse"></div>
                  <div className="relative bg-white/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-wider">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/90">{service.description}</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
