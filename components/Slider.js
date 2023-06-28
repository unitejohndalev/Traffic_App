//import next image
import Image from "next/image";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";

const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={2.15}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className="testimonialSlider"
    >
      {clients.map((client, index) => {
        //destructure client data
        const { message, image, name } = client;
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-white h-[360px] drop-shadow-primary rounded-[10px]
            px-[50px] pt-[60px] pb-[40px] flex flex-col justify-between"
            >
              <p className="font-light leading-[30px]">{message}</p>
              <div className="flex items-center gap-x-5">
                <Image alt="clientImage" src={image} width={50} height={50} />
                <span>{name}</span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
