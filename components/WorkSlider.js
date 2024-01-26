// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "CRO",
          path: "/work1.png",
          link: "https://cro.pelangiservice.com/",
        },
        {
          title: "Speed Typing",
          path: "/speed_typing1.png",
          link: "https://speed-typing-five.vercel.app/",
        },
        {
          title: "Calculator",
          path: "/basic_calculator.png",
          link: "https://argohinori.github.io/basic-calculator/",
        },
        {
          title: "Winner Picker",
          path: "/winner-picker.png",
          link: "https://argohinori.github.io/winner-picker/",
        },
      ],
    },
    {
      images: [
        {
          title: "sample5",
          path: "/thumb4.jpg",
          link: "https://cro.pelangiservice.com/",
        },
        {
          title: "sample6",
          path: "/thumb1.jpg",
          link: "https://cro.pelangiservice.com/",
        },
        {
          title: "sample7",
          path: "/thumb2.jpg",
          link: "https://cro.pelangiservice.com/",
        },
        {
          title: "sample8",
          path: "/thumb3.jpg",
          link: "https://cro.pelangiservice.com/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// import image
import Image from "next/image";

import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 cursor-pointer"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-20 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">{image.title}</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* title part 3 */}
                          <Link
                            href={`${image.link}`}
                            target="_blank"
                            className="rounded-full border text-accent bg-white border-blue-900/50 max-w-[170px] p-3 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group delay-200"
                          >
                            <span className="flex gap-2">
                              <BsArrowRight />
                            </span>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
