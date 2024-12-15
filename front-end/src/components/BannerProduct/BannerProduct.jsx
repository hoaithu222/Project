import image01 from "../../assest/banner/image01.jpg";
import image1 from "../../assest/banner/image1.jpg";
import image2 from "../../assest/banner/image2.jpg";
import image02 from "../../assest/banner/image02.jpg";
import image04 from "../../assest/banner/image04.jpg";
import image4 from "../../assest/banner/image4.jpg";
import image5 from "../../assest/banner/image5.jpg";
import image05 from "../../assest/banner/image05.jpg";

import colors from "../../styles/custom";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function BannerProduct() {
  const [currentImage, setCurrentImage] = useState(0);
  const desktopImage = [image04, image1, image02, image5];
  const mobileImage = [image2, image05, image4, image01];
  const nextImage = () => {
    if (desktopImage.length - 1 > currentImage) {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const prevImage = () => {
    if (currentImage != 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImage.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div>
      <div className={`mx-auto container rounded p-4 `}>
        <div className="h-72 w-full bg-slate-200 relative">
          <div className="absolute z-10 h-full w-full flex items-center">
            <div className="flex justify-between w-full text-4xl">
              <button
                className={`${colors.button.btnFireGlow}`}
                onClick={prevImage}
              >
                <FaChevronLeft />
              </button>
              <button
                className={`${colors.button.btnFireGlow}`}
                onClick={nextImage}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          {/* desktop */}
          <div className="hidden md:flex h-full w-full overflow-hidden">
            {desktopImage.map((imageURL, index) => {
              return (
                <div
                  className="w-full h-full min-w-full min-full translate"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                  key={index + 1}
                >
                  <img src={imageURL} alt="" className="w-full object-cover" />
                </div>
              );
            })}
          </div>
          {/* mobile  */}
          <div className="flex h-full w-full overflow-hidden md:hidden">
            {mobileImage.map((imageURL, index) => {
              return (
                <div
                  className="w-full h-full min-w-full min-full translate-all"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                  key={index + 1}
                >
                  <img
                    src={imageURL}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
