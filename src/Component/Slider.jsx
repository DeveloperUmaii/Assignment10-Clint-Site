import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    const slides = [
        'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://media.istockphoto.com/id/1446305840/photo/tropical-rainforest-in-costa-rica.jpg?b=1&s=612x612&w=0&k=20&c=_ve3dm4fwT5vceWVY5SHSNwkdID9mQgZhNytF_Ev2QQ=',
        'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D',
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

