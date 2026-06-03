import React from 'react';
import styles from '../../resources/scss/components/parts/imageCarousel.module.scss';

const VIDEO_EXT = /\.(mp4|webm|ogg|mov)$/i;

function ImageCarousel({images}) {
    const [current, setCurrent] = React.useState(0);
    const imageSlides = document.getElementsByClassName(styles.slideImage);
    const bubbles = document.getElementsByClassName(styles.bubbleOuter);

    const nextImage = () => {
        let newIndex = (current === images.length - 1 ? 0 : current + 1);
        imageSlides[current].className = `${styles.slideImage} ${styles.leftOut}`;
        imageSlides[newIndex].className = `${styles.slideImage} ${styles.leftIn}`;
        updateBubbles(newIndex);
        setCurrent(newIndex);
        console.log("next");
    }

    const prevImage = () => {
        let newIndex = (current === 0 ? images.length - 1 : current - 1);
        imageSlides[current].className = `${styles.slideImage} ${styles.rightOut}`;
        imageSlides[newIndex].className= `${styles.slideImage} ${styles.rightIn}`;
        updateBubbles(newIndex);
        setCurrent(newIndex);
        console.log("prev");
    }

    const jumpImage = (e) => {
        let jumpIndex = parseInt(e.target.id);
        if(jumpIndex === current) return;
        if(jumpIndex - current >= 0) {
            imageSlides[current].className = `${styles.slideImage} ${styles.leftOut}`;
            imageSlides[jumpIndex].className = `${styles.slideImage} ${styles.leftIn}`;
        } else {
            imageSlides[current].className = `${styles.slideImage} ${styles.rightOut}`;
            imageSlides[jumpIndex].className = `${styles.slideImage} ${styles.rightIn}`;
        }
        updateBubbles(jumpIndex);
        setCurrent(jumpIndex);
    }

    const updateBubbles = (highlight) => {
        bubbles[current].className = `${styles.bubbleOuter}`;
        bubbles[highlight].className = `${styles.bubbleOuter} ${styles.bubbleCurrent}`;
    }

    React.useEffect(() => {
        bubbles[current].className = `${styles.bubbleOuter} ${styles.bubbleCurrent}`;
    }, []);

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryStage}>
                <span className={styles.buttonPrev} onClick={prevImage}>&#xf104;</span>
                <span className={styles.buttonNext} onClick={nextImage}>&#xf105;</span>
                <div className={styles.galleryTrack}>
                {
                    images.map((image, index) => {
                        const slideStyle = (index === current) ? { transform:"translateX(0%)" } : { transform:"translateX(100%)" };
                        return VIDEO_EXT.test(image)
                            ? <video
                                    className={styles.slideImage}
                                    style={slideStyle}
                                    key={index}
                                    src={image}
                                    controls
                                    playsInline
                              />
                            : <img
                                    className={styles.slideImage}
                                    style={slideStyle}
                                    alt={"Some image"}
                                    key={index}
                                    src={image}
                              />
                    })
                }
                </div>
            </div>
            <div className={styles.galleryFooter}>
                {
                    images.map((image, index) => {
                        return <div className={styles.bubbleOuter} onClick={jumpImage} key={index} id={index}>
                            <div className={styles.bubbleInner} id={index}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ImageCarousel;
