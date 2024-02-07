import React from 'react';
import styles from '../../resources/scss/components/parts/projectModal.scss';

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
                <span>{projectContent.title}</span>
                <div className={styles.carouselSlider}>
                    <a
                        className={styles.prevBtn}
                        href={'#'}
                        onClick={callbackFunc}
                    >
                        &#xf104;
                    </a>
                    <a
                        className={styles.nextBtn}
                        href={'#'}
                        onClick={callbackFunc}
                    >
                        &#xf105;
                    </a>
                    <img src={projectContent.images[0]} />
                </div>
                <div className={styles.modalContent}>
                    <ul>
                        <li>Entry 1</li>
                        <li>Entry 2</li>
                        <li>Entry 3</li>
                        <li>Entry 4</li>
                        <li>Entry 5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
