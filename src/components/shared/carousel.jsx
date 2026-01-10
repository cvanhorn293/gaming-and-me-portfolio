import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla-carousel.css';

const GameCarousel = ({ data, selectedIndex, setSelectedIndex, renderSlide, src, name, canFlip = false }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [flip, setFlip] = useState(false);


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
        <div className="embla embla--contained">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {data.map((item, idx) => (
                        <div className="embla__slide flex-col" key={item.id}>
                            <div
                                className={`card-flip-wrapper ${canFlip && idx === selectedIndex && flip ? 'is-flipped' : ''}`}
                                onClick={() => idx === selectedIndex && setFlip(!flip)}
                            >
                                <div className={`card-flip-inner ${idx === selectedIndex ? 'is-active' : ''} ${canFlip && idx === selectedIndex && flip ? 'is-flipped' : ''}`}>
                                    <div className="front p-6 mt-4 mb-4">
                                        <img
                                            src={`/gaming-and-me-portfolio${item[src]}`}
                                            alt={item[name]}
                                            className="mb-4 rounded-lg card-img"
                                        />
                                        <p className="text-center">{!name ? null : item[name]}</p>
                                    </div>
                                    <div className="back p-6 m-4">
                                        <p>This is just some content to make sure the flip is working</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__controls px-10 md:px-0">
                <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous slide">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="embla__progress-bar-container">
                    <div className="embla__progress-bar">
                        <div
                            className="embla__progress-bar-fill"
                            style={{ width: `${data.length > 1 ? ((selectedIndex + 1) / data.length) * 100 : 100}%` }}
                        />
                    </div>
                </div>
                <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next slide">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default GameCarousel;