// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";

// next image
import Image from "next/image";

// SwiperCore.use([Keyboard, Mousewheel]);

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      className="h-fit"
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // mousewheel={true}
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image) => (
              <div
                key={image.title}
                className="relative rounded-lg overflow-hidden flex items-center 
                justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt="work" />
                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                  opacity-0 group-hover:opacity-80 transition-all duration-700"
                  />
                  {/* title */}
                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                  group-hover:xl:-translate-y-20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 
                      delay-150"
                      >
                        PROJECT
                      </div>
                      {/* icon */}
                      <div
                        className="text-xl translate-y-[500%] group-hover:translate-y-0 
                      transition-all duration-300 delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
