"use client";

import Image from "next/image";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ImagesProps {
  images?: string[];
}

export default function Images({ images }: ImagesProps) {

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!images || images.length === 0) return null;

  function cycleImages(direction: number) {
    if (!images) return;
    const newIndex = (selectedImageIndex + direction + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  }

  return (
     <section className="mb-12">
      <div className="hidden relative sm:flex justify-center items-center bg-gray-100 rounded-[16px] w-full aspect-[16/9]">
        {images[selectedImageIndex] &&
          <Image
            src={images[selectedImageIndex]}
            alt="Main"
            className="object-contain"
            width={1104}
            height={621}
          />
        }

        {/* Chevrons */}
        {images.length > 1
          ? <>
              <button onClick={() => cycleImages(-1)} aria-label="Previous" className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:bg-background/90 transition">
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button onClick={() => cycleImages(1)} aria-label="Next" className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:bg-background/90 transition">
                <ChevronRight className="w-5 h-5"/>
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setSelectedImageIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2 w-8 rounded-full ${i === selectedImageIndex ? "bg-foreground" : "bg-border/50"}`}/>
                ))}
              </div>
            </> 
          : null
        }
      </div>

      {/* Mobile Carousel */}
      <div className="w-full flex flex-col items-center mt-6 sm:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: false, el: '.custom-swiper-pagination' }}
          slidesPerView={1}
          className="w-full aspect-[16/9] rounded-xl bg-gray-100"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center rounded-xl relative"
            >
              {image ? (
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={1104}
                  height={621}
                  className="object-contain rounded-xl"
                />
              ) : (
                <div className="text-gray-400">No image</div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 flex justify-center gap-4"/>
      </div>
    </section>
  );
}
