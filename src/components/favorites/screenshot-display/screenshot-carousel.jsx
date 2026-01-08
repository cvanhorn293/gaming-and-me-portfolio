import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './screenshot-thumb-buttons.jsx'

const ScreenshotCarousel = ({ screenshotData }) => {
    const screenshots = screenshotData && screenshotData.results ? screenshotData.results : [];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: false });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true });

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <div className="embla__ss">
            <div className="embla__ss__viewport" ref={emblaMainRef}>
                <div className="embla__ss__container">
                    {screenshots.map((screenshot, index) => (
                        <div className="embla__ss__slide" key={screenshot.id}>
                            <img src={screenshot.image} alt={`Screenshot ${index + 1}`} className="rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__ss-thumbs">
                <div className="embla__ss-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla__ss-thumbs__container">
                        {screenshots.map((screenshot, index) => (
                            <Thumb
                                key={screenshot.id}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                index={index}
                                image={screenshot.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenshotCarousel
