import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    const slides = [
        'https://i.ibb.co.com/cXxpCYHs/Gemini-Generated-Image-p6ctgzp6ctgzp6ct.jpg',
         'https://i.ibb.co.com/Xx5T72ns/Gemini-Generated-Image-4psxxl4psxxl4psx.jpg',
         'https://i.ibb.co.com/Df2pSkxc/Gemini-Generated-Image-65463n65463n6546.jpg',
         'https://i.ibb.co.com/j99px32g/Gemini-Generated-Image-u1qwiyu1qwiyu1qw.jpg',
         'https://i.ibb.co.com/JgP3cmJ/Gemini-Generated-Image-lu7qh3lu7qh3lu7q.jpg',
         'https://i.ibb.co.com/3971rW7m/Gemini-Generated-Image-lho8d4lho8d4lho8.jpg',
         'https://i.ibb.co.com/WpDT44F2/Gemini-Generated-Image-w5u0u0w5u0u0w5u0.jpg',
         'https://i.ibb.co.com/PzVpC339/Gemini-Generated-Image-2xuy2y2xuy2y2xuy.jpg',
         'https://i.ibb.co.com/4nJ5v9C1/Gemini-Generated-Image-v0sw14v0sw14v0sw.jpg',
    ];

    return (
        <div className="my-8 w-full max-w-6xl mx-auto px-4">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="rounded-xl overflow-hidden shadow-lg"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 xl:h-96 object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;