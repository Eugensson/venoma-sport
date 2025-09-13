"use client";

import Image from "next/image";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { latestProducts } from "@/lib/data";

import "swiper/css";
import "swiper/css/scrollbar";

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      scrollbar={{ hide: false }}
      modules={[Scrollbar]}
      className="h-145"
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1170: {
          slidesPerView: 4,
        },
      }}
    >
      {latestProducts.map(({ id, image, name, description, price }) => (
        <SwiperSlide key={id} className="select-none w-full cursor-pointer">
          <div className="h-90 flex items-center justify-center bg-grey-50">
            <Image
              src={image}
              alt={name}
              width={240}
              height={240}
              quality={100}
            />
          </div>
          <div className="pt-4 w-full flex flex-col gap-4">
            <div>
              <h3 className="mb-2 font-semibold text-primary">{name}</h3>
              <p className="text-sm">{description}</p>
            </div>
            <p className="font-semibold text-accent2">{price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
