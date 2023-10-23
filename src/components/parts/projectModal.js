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
                <div className={styles.modalContent}>
                    <img src={projectContent.images[0]} />
                    <span>{projectContent.title}</span>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
