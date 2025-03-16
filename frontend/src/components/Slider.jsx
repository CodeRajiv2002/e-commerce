import React, { useState, useEffect, useCallback } from 'react';
import slod3 from '../assets/slod3.jpg'
import slid1 from '../assets/slid1.jpg'
import img2 from '../assets/img2.jpg'
const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, url: slod3, alt: 'Slide 1' },
        { id: 2, url: slid1, alt: 'Slide 2' },
        { id: 3, url: img2, alt: 'Slide 3' },
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide(current =>
            current === slides.length - 1 ? 0 : current + 1
        );
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(current =>
            current === 0 ? slides.length - 1 : current - 1
        );
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="relative w-full md:h-[550px] h-[200px] z-0 mx-auto overflow-hidden">
            {/* <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 z-10 hover:bg-black/80"
            >
                ❮
            </button> */}
            {/* <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 z-10 hover:bg-black/80"
            >
                ❯
            </button> */}

            <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <img
                        key={slide.id}
                        src={slide.url}
                        alt={slide.alt}
                        className="min-w-full h-full object-cover"
                    />
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
