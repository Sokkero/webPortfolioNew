import React from 'react';
import styles from '../../resources/scss/components/parts/projectModal.scss';
import ImageCarousel from "./imageCarousel";

function ProjectModal({projectContent, callbackFunc}) {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalBody}>
                <a
                    className={styles.closeBtn}
                    href={'#'}
                    onClick={callbackFunc}
                >
                    &#xf00d;
                </a>
                <span className={styles.modalTitle}>{projectContent.title}</span>
                <div className={styles.carouselSlider}>
                    <ImageCarousel images={projectContent.images}/>
                </div>
                <div className={styles.modalContent}>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
