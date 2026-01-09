export const Thumb = (props) => {
    const { selected, image, onClick } = props;

    return (
        <div
            className={'embla__ss-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
            onClick={onClick}
        >
            <img
                src={image}
                alt="Thumbnail"
                className="embla__ss-thumbs__slide__img"
            // style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
        </div>
    );
}
