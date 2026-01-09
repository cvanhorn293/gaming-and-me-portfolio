import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const GameCarousel = ({ games, selectedIndex, setSelectedIndex, screenShotData }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

        emblaApi.on('select', onSelect);

        setSelectedIndex(emblaApi.selectedScrollSnap());
        return () => emblaApi && emblaApi.off('select', onSelect);

    }, [emblaApi, setSelectedIndex]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {games.map((game, idx) => (
                        <>
                            <div className="embla__slide flex-col" key={game.id}>
                                <div className={`embla__slide__inner${idx === selectedIndex ? ' is-active' : ''}`}>
                                    <div className="p-6 m-4">
                                        <img src={`/gaming-and-me-portfolio${game.imagePath}`} alt={game.name || game.title} className="mb-4 rounded-lg" />
                                        <p className="text-center">{game.name}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="embla__controls px-10 md:px-0">
                <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous slide">&#8592;</button>
                <div className="embla__progress-bar-container">
                    <div className="embla__progress-bar">
                        <div
                            className="embla__progress-bar-fill"
                            style={{ width: `${games.length > 1 ? ((selectedIndex + 1) / games.length) * 100 : 100}%` }}
                        />
                    </div>
                </div>
                <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next slide">&#8594;</button>
            </div>
        </div>
    );
};

export default GameCarousel;