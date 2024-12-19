import { useState } from "react";
import avatar1 from "../../assest/avatar1.png";
import avatar2 from "../../assest/avatar2.png";
import avatar3 from "../../assest/avatar3.png";
import avatar4 from "../../assest/avatar4.png";
import avatar5 from "../../assest/avatar5.png";
import colors from "../../styles/custom";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      rating: 5,
      comment:
        "Best purchase I've made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!",
      author: "Christina M.",
      location: "Canada",
      avatar: avatar1,
    },
    {
      rating: 4,
      comment:
        "Clothers are addicting! Love this brand and shoe. The arch support is wonderful and helps for long hours on your body. The narrow heel is wonderfully!",
      author: "Dean D.",
      location: "Australia",
      avatar: avatar2,
    },
    {
      rating: 5,
      comment:
        "Clothers are addicting! Love this brand and shoe. The arch support is wonderful and helps for long hours on your body. The narrow heel is wonderfully!",
      author: "Dean D.",
      location: "Australia",
      avatar: avatar3,
    },
    {
      rating: 5,
      comment:
        "Clothers are addicting! Love this brand and shoe. The arch support is wonderful and helps for long hours on your body. The narrow heel is wonderfully!",
      author: "Dean D.",
      location: "Australia",
      avatar: avatar4,
    },
    {
      rating: 4,
      comment:
        "Clothers are addicting! Love this brand and shoe. The arch support is wonderful and helps for long hours on your body. The narrow heel is wonderfully!",
      author: "Dean D.",
      location: "Australia",
      avatar: avatar5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="container mx-auto p-10 ">
      <h2
        className={`${colors.textColors.blueToPink} text-3xl text-center capitalize font-semibold mt-2 bg-clip-text text-transparent flex items-center justify-center mb-6 gap-2`}
      >
        <FcLikePlaceholder
          className={`text-7xl cursor-pointer transition-transform hover:scale-125 border-4 border-dashed border-purple-300 rounded-full p-3`}
        />
        FROM OUR CUSTOMERS
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-6">
                <div className="bg-gradient-to-br from-pink-400 to-blue-400 rounded-2xl shadow-xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white text-lg mb-6 leading-relaxed">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-2xl text-yellow-200 ">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-white">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <button
            className={`${colors.button.btnBluePink}`}
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <button
            className={`${colors.button.btnBluePink}`}
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
